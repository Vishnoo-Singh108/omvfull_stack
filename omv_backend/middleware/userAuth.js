// middleware/userAuth.js
import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ msg: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // ✅ Attach to request
    next();
  } catch (error) {
    return res.status(500).json({ msg: "Auth server error" });
  }
};

export default userAuth;
