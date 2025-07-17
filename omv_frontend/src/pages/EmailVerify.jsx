import React, { useContext, useRef, useState } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const EmailVerify = () => {
  axios.defaults.withCredentials = true;
  const { backendUrl, userData, getUserData } = useContext(AppContent);
  const navigate = useNavigate();

  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      toast.error("Please enter the full 6-digit OTP");
      return;
    }

    if (!userData || !userData._id) {
      toast.error("User not found. Please login again.");
      return;
    }

    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/verify-account`, {
        otp: enteredOtp,
        userId: userData._id,
      });

      if (data.success) {
        toast.success(data.message || "Email verified successfully!");
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message || "OTP verification failed");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error(error.response?.data?.message || error.message || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="user_logo.png"
          className="mx-auto h-11 w-auto"
        />
      </div>

      <form className="space-y-6" onSubmit={onSubmitHandler}>
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-200">
          Verify Your Email
        </h2>
        <p className="text-center mb-8 text-indigo-300">
          Enter the 6-digit code sent to your email address
        </p>

        <div className="flex justify-center mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              required
              className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md m-2.5"
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center rounded-md bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default EmailVerify;
