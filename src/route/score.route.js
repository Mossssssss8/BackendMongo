const express = require("express")
const router = express.Router()
const ScoreController = require("../controller/score.controller")
// http://localhost:3000/score/
router.post("/add", ScoreController.addScore)
router.get("/get/:id",ScoreController.getScoreById)
router.get("/", ScoreController.getScore)
router.put("/update/:id", ScoreController.updateScore)
router.delete("/delete/:id", ScoreController.deleteScore)

module.exports = router  