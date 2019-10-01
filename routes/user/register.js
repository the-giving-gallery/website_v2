const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/equipment"
router.route("/POST").post(userController.create);
router.route("/GET").get(userController.findAll);


module.exports = router;