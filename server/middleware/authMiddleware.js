import jwt from "jsonwebtoken";
import asyncHanlder from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHanlder(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Authorized , token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized , NO token ");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as an Admin ");
  }
};
export { protect, admin };
