const path = require("path");
const router = require("express").Router();
const userController = require("../controllers/userController")


// API Routes
router.post("/user/register", userController.register)
router.post("/user/signin", userController.signin)


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
