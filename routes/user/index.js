const path = require("path");
const router = require("express").Router();
// const auth = require("./auth");
const registerUser = require("./user");


// API Routes

// router.use("/auth", auth);
router.use("/POST", registerUser)
router.use("/GET", registerUser)
// router.use("/login", registerUser)


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
