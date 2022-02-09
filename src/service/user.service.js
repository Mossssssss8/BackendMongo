const { request } = require("express")
const UserModel = require("../model/users.schema")
exports.getUser = async() => {
    const allUser = await UserModel.find()
    return allUser
}
exports.addUser = async(req) => {
    console.log(req.body)
    const createUser = new UserModel(req.body)
    return createUser.save()
}
exports.updateUser = async(req) => {
    const editUser = await UserModel.findOne({ _id: req.params.id })
    req.body.username != null ? editUser.username = req.body.username : "";
    req.body.email != null ? editUser.email = req.body.email : "";
    req.body.password != null ? editUser.password = req.body.password : "";
    req.body.gender != null ? editUser.gender = req.body.gender : "";
    req.body.age != null ? editUser.age = req.body.age : "";
    req.body.height != null ? editUser.height = req.body.height : "";
    req.body.weight != null ? editUser.weight = req.body.weight : "";
    editUser.save();
}
exports.deleteUser = async(req) => {
    const result = await UserModel.findOne({ _id: req.params.id })
    const doc = await UserModel.deleteOne(result)

    return doc
}