import { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null); // Changed from false to null
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  // Set axios defaults once
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  const getUserData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`);
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
        setUserData(null);
      }
      return data.userData;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch user data");
      setUserData(null);
      return null;
    }
  }, [backendUrl]);

  const getAuthState = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
      if (data.success) {
        setIsLoggedin(true);
        await getUserData();
      } else {
        setIsLoggedin(false);
        setUserData(null);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      setIsLoggedin(false);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  }, [backendUrl, getUserData]);

  useEffect(() => {
    getAuthState();
  }, [getAuthState]);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
    isLoading, // Expose loading state
    getAuthState, // Expose auth state checker
  };

  return <AppContent.Provider value={value}>{children}</AppContent.Provider>;
};