const path = require("path");
const router = require("express").Router();
const test = require("./test")


// API Routes

router.use("/test", test);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
