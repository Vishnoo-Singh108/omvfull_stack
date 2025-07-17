import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from "../models/userModel.js";

import transporter from "../config/nodemailer.js";
import { decrypt } from "dotenv";

export const register = async (req, res) => {
  
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

   

    const mailOptions = {
      from:process.env.SENDER_EMAIL,
      to:email,
      subject: "Welcome to our platform OMV",
      text:`Welcome to OMV website. Your account has been created successfully with email id:${email}`,

    }

    await transporter.sendMail(mailOptions);

    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error registering user." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in user." });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    return res.status(500).json({ message: "Error logging out user." });
  }
};

export const sendVerifyOtp = async (req,res) =>{
  try{
      const {userId} = req.body;

      const user = await userModel.findById(userId);
      if (user.isAccountVerified) {
        return res.status(400).json({ message: "Account already verified" });
  }
  
  
 const otp = String(Math.floor(100000+ Math.random() * 900000));
  user.verifyOtp = otp;
  user.verifyOtpExpireAt = Date.now() + 24*60*60*1000;

  await user.save();

  const mailOption = {
       from:process.env.SENDER_EMAIL,
      to:user.email,
      subject: "OMV Account Verification OTP",
      text:`Your OTP is ${otp}. Verify your account using this OTP.`,

  }

  await transporter.sendMail(mailOption);

  res.json({success:true, message: 'Verification OTP sent to your email.'});



 } catch(error){
    res.json({success:false, message:error.message});
  }
};

export const verifyEmail = async (req, res) =>{
  const {userId ,otp} = req.body;
  
  if(!userId || !otp){
    return res.status(400).json({message: "Invalid request."});
  }

  try{
      const user = await userModel.findById(userId);
      if(!user){
        return res.status(400).json({message: "User not found."});
      }
      if(user.verifyOtp ==='' || user.verifyOtp !== otp){
        return res.status(400).json({message: "Invalid OTP."});
      }

      if(user.verifyOtpExpireAt <Date.now()){
        return res.status(400).json({message: "OTP expired."});
      }

      user.isAccountVerified = true;
      user.verifyOtp = '';
      user.verifyOtpExpireAt = 0;
      await user.save();
      return res.json({success:true, message: 'Email verified successfully.'});



  }catch(error){
    return res.json({success:false, message: error.message});
  }
};

export const isAuthenticated = async (req,res)=>{
  try {

    return res.json({success:true})


  } catch (error) {
    res.json ({success:false, message: error.message});
  }
};


