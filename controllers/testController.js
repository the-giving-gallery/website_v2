const db = require('../models')

module.exports = {

    findAll: function (req, res) {
        db.User.findAll({
            where: {
                id: 1
            }
        }).then(dbUser => res.send(dbUser))
    }
}
