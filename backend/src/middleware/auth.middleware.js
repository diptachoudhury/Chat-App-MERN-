import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async ( req, res, next) => {

   try {
    const token = req.cookies.jwt; //cookie-parseer needed

    if(!token){
        return res.status(401).json({message: "Unauthorized - No Token Provided"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if(!decoded) {
        return res.status(401).json({message: "Unauthorized - Invalid"})
    }

    const user = await User.findById(decoded.userId).select("-password"); //cookie parser decoded has userId as we set it up, -pass indciates send all exxcept this

    if(!user) {
        return res.status(404).json({message: "User not found"});
    }

    req.user = user;

    next();


   } catch {
    console.log("Error in protected Route middleware", error.message);
    res.status(500).json({message: "Internal Server Error"});
   } 

} ;