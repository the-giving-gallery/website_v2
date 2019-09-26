var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the todos
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    app.get("/api/user", function (req, res) {
        // Add sequelize code to find all posts, and return them to the user with res.json
        db.User.findAll().then(function (results) {
            res.json(results);
        })
    });
}