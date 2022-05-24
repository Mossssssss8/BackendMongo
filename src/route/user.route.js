const express = require("express")
const router = express.Router()
const UserController = require("../controller/user.controller")
// http://localhost:3000/user/
router.post("/add", UserController.addUser)
router.get("/", UserController.getUser)
router.put("/update/:id", UserController.updateUser)
router.delete("/delete/:id", UserController.deleteUser)
router.post("/login/", UserController.login)
router.get("/get/:id",UserController.getOneUser)
router.put("/updateScore/:id",UserController.UpdateScore)
router.get("/getScore/:id",UserController.GetUserScore);



module.exports = router