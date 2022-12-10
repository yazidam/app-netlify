const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decoded", decoded);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("not authorized no token");
    }
  }
  if (!token) console.log("no token");
};

module.exports = protect;
