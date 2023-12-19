const express = require("express")

const router = express.Router()

const UserController = require("../Controllers/UserController")


router.post("/adduser", UserController.addUser)
router.get("/alluser", UserController.getAllUsers)

module.exports = router
