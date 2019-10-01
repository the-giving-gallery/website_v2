const db = require('../models')

module.exports = {

    findAll: function (req, res) {
        db.User.findAll({
            where: {
                id: 1
            }
        }).then(dbUser => res.send(dbUser))
    },
    create: function (req, res){
        db.User.create({
            username: req.body.name,
            password: req.body.password,
        }).then(user => {
            res.send(user)
        })
    }
}
