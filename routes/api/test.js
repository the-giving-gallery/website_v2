const router = require("express").Router();
const testController = require("../../controllers/testController");

// Matches with "/api/equipment"
router.route("/GET").get(testController.findAll);


module.exports = router;