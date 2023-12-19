const User = require("../Modals/UserSchema")

exports.addUser = (req, res) => {
    const user = new User({
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserPassword: req.body.UserPassword,
        UserMobno: req.body.UserMobno
    })

    user.save()
        .then((result) => {
            console.log(result)
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}


exports.getAllUsers = (req, res) => {
    User.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}