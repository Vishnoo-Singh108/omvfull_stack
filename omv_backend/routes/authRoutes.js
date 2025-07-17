import express from 'express';

const authRouter = express.Router();

import { register, login, logout, sendVerifyOtp, verifyEmail, isAuthenticated} from '../controller/authController.js';
import userAuth from '../middleware/userAuth.js';



authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth,sendVerifyOtp);
authRouter.post('/verify-account', userAuth, verifyEmail);
authRouter.get('/is-auth',userAuth, isAuthenticated);

export default authRouter;