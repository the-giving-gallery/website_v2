var db = require("../../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/user", function (req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.User.findAll().then(function (results) {
      res.json(results);
    })
  })
};

const router = require("express").Router();
const testController = require("../../controllers/testController");

// Matches with "/api/equipment"
router.route("/GET").get(testController.findAll);


module.exports = router;