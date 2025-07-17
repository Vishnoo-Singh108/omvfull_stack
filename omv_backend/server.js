import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
import connectDB from './config/mongodb.js';

const app = express();
const port = process.env.PORT || 4000;

//  Connect to MongoDB
connectDB();

//  Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
  origin: allowedOrigin,
  credentials: true, // Allow cookies and headers to be sent
}));

//  Test Route
app.get('/', (req, res) => {
  res.send(' API Working');
});

//  API Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(" Server Error:", err.stack);
  res.status(500).json({ success: false, message: "Server error" });
});

//  Start Server
app.listen(port, () => {
  console.log(` Server is running on PORT: ${port}`);
});
