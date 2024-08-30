const jwt = require("jsonwebtoken");
const User = require("./models/userModel.js");

const adminCheck = async (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "JWT required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findOne({ _id }).select("_id");
    if (req.user === null) {
      throw Error("Bad token");
    }
    if (req.user?.isAdmin === false) {
      throw Error("User is not an admin");
    }
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = adminCheck;
