import { uploadOnCloudinary, uploadOnCloudinaryPdf } from "../middlewares/multer.js";
import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body

    if (!name || !email || !password || !confirmPassword) {
      return res.json({
        success: false,
        message: "ALL required"
      })
    }
    const registeredUser = await User.findOne({ email })
    if (registeredUser) {
      return res.json({
        success: false,
        message: "User is already registered . . . "
      })
    }
    if (password !== confirmPassword) {
      throw new Error("Password does not match . . . ")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    })
    return res.status(200).json({
      success: true,
      message: "User registered successfully . . .",
      newUser
    })


  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        error: true,
        message: "User is not registered"
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new Error("password is incorrect . . .");
    }
    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY);

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 30 * 24 * 60 * 60 * 1000
    };
    return res.cookie("portToken", token, options).json({
      success: true,
      message: "user logged in successfully . . .",
      data: {
        "name": `${user.name}`,
        "email": `${user.email}`,
        "id": user._id
      }
    });

  } catch (error) {
    return res.json({
      message: error.message
    });
  }
};

//logout
const logout = async (req, res) => {
  res.cookie("token", '').json({
    message: "logged out",
    success: true,
  });
};


//register/upload Details
const uploadDetails = async (req, res) => {
  const
    {
      phonenumber,
      title,
      description,
      linkedinlink,
      githublink,
      instagramlink,
      facebooklink,
      profession,
    } = req.body;

  const userId = req._id
  try {
    const user = await User.findById(userId)

    if (!user) {
      throw new Error("user not found")
    }

    if (!title || !description || !profession || !phonenumber) {
      throw new Error(" * (compulsory)  fields are required . . ")
    }
    const profileFilePath = req.files?.profile[0]?.path

    if (!profileFilePath) {
      throw new Error("file : missing profile path");
    }
    const profile = await uploadOnCloudinary(profileFilePath);

    if (!profile) {
      throw new Error("Profile upload error");
    }
    const resumeFilePath = req.files?.resume?.path

    const resume = await uploadOnCloudinary(resumeFilePath);

    user.title = title
    user.description = description
    user.phonenumber = phonenumber
    user.profession = profession
    user.profile.imageUrl = profile.secure_url
    user.profile.publicId = profile.public_id
    if (resume) {
      user.resume.imageUrl = resume.secure_url
      user.resume.publicId = resume.public_id
    }
    if (linkedinlink) user.linkedinlink = linkedinlink
    if (githublink) user.githublink = githublink
    if (facebooklink) user.facebooklink = facebooklink
    if (instagramlink) user.instagramlink = instagramlink

    await user.save()

    return res.status(200).json({
      success: true,
      message: "User Details uploaded successfully",
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

//update image
const updateResume = async (req, res) => {
  const userId = req._id
  const { resume } = req.body

  try {
    const user = await User.findById(userId)

    if (!user) {
      throw new Error("User not found . . .")
    }

    if (!resume.length) {
      throw new Error("required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          resume
        },

      }, {
      new: true,
    }

    )
    res.status(200).json({
      message: "profile resume Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateImage = async (req, res) => {
  // console.log("hi");

  const userId = req._id
  // console.log(userId);

  try {
    const user = await User.findById(userId)

    if (!user) {
      res.status(404).json({
        message: "User not found . . .",
        success: false,
      })
    }

    const profilePath = req.file?.path

    if (!profilePath) {
      throw new Error("file missing")
    }

    const profile = await uploadOnCloudinary(profilePath)

    if (!profile) {
      throw new Error("file missing")
    }

    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "profile.imageUrl": profile?.url,
          "profile.publicId": profile?.public_id,
        },

      }, {
      new: true,
    }

    )
    res.status(200).json({
      message: "profile image Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

const updateName = async (req, res) => {
  const { name } = req.body
  const userId = req._id
  try {
    const user = await User.findById(userId)
    // console.log(user)

    if (!name) {
      throw new Error("name required . . .",)
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          name,
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "profile name Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateEmail = async (req, res) => {
  const { email } = req.body
  const userId = req._id
  try {
    const user = await User.findById(userId)
    if (!email) {
      throw new Error("email is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          email,
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "User email Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updatePhoneNumber = async (req, res) => {
  const { phonenumber } = req.body

  const userId = req._id
  try {
    const user = await User.findById(userId)
    if (!phonenumber) {
      throw new Error("Phone number is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          phonenumber: phonenumber
        }
      },
    )
    res.status(200).json({
      message: "profile phone number Updated",
      success: true,
    })



  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

const updateProfession = async (req, res) => {
  const { profession } = req.body
  const userId = req._id
  try {
    const user = await User.findById(userId)

    if (!profession) {
      throw new Error("profession is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          profession: profession,
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "profile profession Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateUserName = async (req, res) => {
  const { userName } = req.body
  const userId = req._id
  try {
    const user = await User.findById(userId)

    if (!userName) {
      throw new Error("username is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          username: userName,
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "profile username Updated",
      success: true,
      data: user
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateUserTitle = async (req, res) => {
  const { userTitle } = req.body
  const userId = req._id
  // console.log("userTitle : ",userTitle.trim());

  try {

    if (!userTitle) {
      throw new Error("Title is required")
    }

    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          title: userTitle,
        }
      }, { new: true }
    )
    // console.log("updatedUser", updatedUser);


    res.status(200).json({
      message: "profile work title Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateUserDesc = async (req, res) => {
  const { desc } = req.body
  const userId = req._id
  try {
    const user = await User.findById(userId)

    if (!desc) {
      throw new Error("description is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          description: desc,
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "profile Description Updated",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updatelinked = async (req, res) => {
  const { linkedinlink } = req.body
  // console.log(linkedinlink);

  const userId = req._id
  try {

    if (!linkedinlink) {
      throw new Error("link is required")
    }

    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          linkedinlink,
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "Updated LinkedIn successfully",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updategit = async (req, res) => {
  const { githublink } = req.body
  const userId = req._id
  try {
    if (!githublink) {
      throw new Error("github is required")
    }

    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          githublink
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "Updated GitHub successfully",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateinsta = async (req, res) => {
  const { instagramlink } = req.body
  const userId = req._id
  try {
    if (!instagramlink) {
      throw new Error("link is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          instagramlink
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "Updated Instagram successfully",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const updateface = async (req, res) => {
  const { facebooklink } = req.body
  const userId = req._id
  try {
    if (!facebooklink) {
      throw new Error("link is required")
    }
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          facebooklink
        }
      }, { new: true }
    )

    res.status(200).json({
      message: "Updated Facebook successfully",
      success: true,
    })

  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}

const getUserinfo = async (req, res) => {
  const userId = req._id
  try {
    let user = await User.findById(userId).populate('posts')
    if (!user) {
      res.status(404).json({
        message: "User not found . . .",
        success: false,
      })
    }

    return res.status(200).json({
      success: true,
      message: " user Info get successfully",
      data: [
        {
          "name": `${user.name}`,
          "profession": user.profession,
          "username": `${user.username}`,
          "title": `${user.title}`,
          "description": user.description,
          "imgUrl": `${user.profile.imageUrl}`,
          "imgId": `${user.profile.publicId}`,
          "resumeImgUrl": `${user.resume.imageUrl}`,
          "resumeImgId": `${user.resume.publicId}`,
          "linkedinlink": `${user.linkedinlink}`,
          "githublink": `${user.githublink}`,
          "instagramlink": `${user.instagramlink}`,
          "facebooklink": `${user.facebooklink}`,
          "phoneNumber": user.phonenumber,
          "email": `${user.email}`,
        }
      ],
    });
  } catch (error) {

  }
};
const getstatusUserinfo = async (req, res) => {
  const userId = req._id
  try {
    let user = await User.findById(userId)
    if (!user) {
      res.status(404).json({
        message: "User not found . . .",
        success: false,
      })
    }

    return res.status(200).json({
      success: true,
      status: true
    });
  } catch (error) {
    return res.json({
      success: false,
      status: false
    });
  }
};

const allInfo = async (req, res) => {
  const { id } = req.query
  try {
    if (!id) {
      throw new Error("Invalid")
    }
    let user = await User.findById(id)
    if (!user) {
      throw new Error("user not found")

    }
    user = await User.findById(id).select('-password').populate('posts').populate('certificates').populate({ path: 'blogs' })

    return res.status(200).json({
      message: "hurreh",
      success: true,
      user
    })

  } catch (error) {
    res.json({
      message: error.message
    })
  }


}


const addSkills = async (req, res) => {
  const { newskills } = req.body
  const userId = req._id

  try {
    if (newskills.length === 0) {
      throw new Error("skills are required")
    }
    const user = await User.findById(userId)
    const skills = user.skills
    skills.push(newskills)
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          skills
        }
      }, { new: true }
    )
    res.status(200).json({
      message: "Updated Skills successfully",
      success: true,

    })
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}
const deleteSkill = async (req, res) => {
  const { index } = req.body
  const userId = req._id

  try {
    if (index < 0) {
      throw new Error("index are required")
    }
    let id = (index)
    const user = await User.findById(userId)
    let skills = user.skills
    skills = skills.filter(index => (
      skills.indexOf(index) !== id
    ))
    await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          skills
        }
      }, { new: true }
    )
    res.status(200).json({
      message: "Updated Skills successfully",
      success: true,

    })
  } catch (error) {
    res.json({
      message: error.message,
    })
  }
}



export {
  updateImage,
  login,
  logout,
  getUserinfo,
  updateUserTitle,
  uploadDetails,
  updateName,
  updateEmail,
  updateUserName,
  updateUserDesc,
  updatePhoneNumber,
  updateProfession,
  updateface,
  updategit,
  updateinsta,
  updatelinked,
  updateResume,
  register,
  allInfo,
  addSkills,
  deleteSkill,
  getstatusUserinfo
};

