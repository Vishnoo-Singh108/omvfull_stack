import userModel from '../models/userModel.js'; // ✅ Fix: import your model

export const getUserData = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId); // use token decoded value
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ success: true, userData: user });
  } catch (error) {
    console.error(error); // optional for debugging
    return res.status(500).json({ success: false, message: error.message });
  }
};
