import jwt from "jsonwebtoken";
import { User } from "../model/user.js";
export const verifyJwt = async (req, res, next) => {
  try {
    const token = req?.cookies?.portToken
    
    if (!token) {
      throw new Error("unauthorized Access");
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);

    if (!decodedToken) {
      res.status(400).json({
        message: "something went wrong . . .",
        success: false,
      })
    }

    const user = await User.findById(decodedToken.userId)
    if(!user){
      throw new Error("User not found")
    }

    req._id = decodedToken.userId;
    
    next()
  } catch (error) {
    res.json({
      success: false,
      status:false,
      error: true,
      message: error.message,
    });
  }
};
