const { request } = require("express")
const scoreModel = require("../model/score.schema")
exports.getScore = async() => {
    const allScore = await scoreModel.find()
    return allScore
}
exports.addScore = async(req) => {
    console.log(req.body)
    const createScore = new scoreModel(req.body)
    createScore.save()
    return "complete"
}
exports.updateScore = async(req) => {
    console.log("checkeditScore");
    console.log(req.body);
    const editScore = await scoreModel.findOne({ _id: req.params.id })
    req.body.UserId != null ? editScore.UserId = req.body.UserId : "";
    req.body.Score != null ? editScore.Score = req.body.Score : "";
    req.body.DateTime != null ? editScore.DateTime = req.body.DateTime : "";
    req.body.Seconds != null ? editScore.Seconds = req.body.Seconds : "";
    req.body.Status != null ? editScore.Status = req.body.Status : "";
    
    editScore.save();
    return editScore
}
exports.deleteScore = async(req) => {
    const result = await scoreModel.findOne({ _id: req.params.id })
    const doc = await scoreModel.deleteOne(result)
    return doc
}
