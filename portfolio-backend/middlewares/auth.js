import jwt from "jsonwebtoken";
import { User } from "../model/user.js";
export const verifyJwt = async (req, res, next) => {
  try {
    const token = req.cookies.token
    console.log("token ",token);
    
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

    req._id = decodedToken.userId;
    
    next()
  } catch (error) {
    res.json({
      success: false,
      error: true,
      message: error.message,
    });
  }
};
