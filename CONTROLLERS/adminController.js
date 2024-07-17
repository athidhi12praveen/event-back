const admins = require("../MODELS/adminSchema");

const jwt = require("jsonwebtoken");

const jwtsecret = process.env.JWTSECRET;

// login
exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingAdmin = await admins.findOne({ email, password });
    if (existingAdmin) {
      const token = jwt.sign({ adminId: existingAdmin._id }, jwtsecret);
      res.status(200).json({ existingAdmin, token });
    } else {
      res.status(406).json("Incorrect email or password");
    }
  } catch (err) {
    res.status(401).json(err);
  }
};
