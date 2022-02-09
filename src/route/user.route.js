const express = require("express")
const router = express.Router()
const UserController = require("../controller/user.controller")
router.post("/add", UserController.addUser)
router.get("/", UserController.getUser)
router.put("/update/:id", UserController.updateUser)
router.delete("/delete/:id", UserController.deleteUser)
router.post("/login/", UserController.login)





module.exports = router