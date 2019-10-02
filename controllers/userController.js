const db = require('../models')

module.exports = {

    findAll: function (req, res) {
        db.User.findOne({
            where: {
                id: 1
            }
        }).then(dbUser => res.send(dbUser))
    },
    // findUser: function (req, res) {
    //     db.User.findOne({
    //         where: {
    //             username: req.params.username
    //         }
    //     }).then(dbUser => res.send(dbUser))
    // },
    createNewUser: async function (req, res) {
        const usernameExist = await db.User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(usernameExist) return res.status(400).send("username is already taken")
        const emailExist = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(emailExist) return res.status(400).send("email is already taken")
        db.User.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }).then(user => {
            res.send(user)
        })
    }
}
