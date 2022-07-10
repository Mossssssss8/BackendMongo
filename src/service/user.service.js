const { request } = require("express")
const UserModel = require("../model/users.schema")
const formidable = require('formidable');
const fs = require('fs');
exports.getUser = async () => {
    const allUser = await UserModel.find()
    return allUser
}
exports.addUser = async (req) => {
    console.log(req.body)
    const createUser = new UserModel(req.body)
    return createUser.save()
}
exports.updateUser = async (req) => {
    console.log("checkedituser");
    console.log(req.body);
    const editUser = await UserModel.findOne({ _id: req.params.id })
    req.body.username != null ? editUser.username = req.body.username : "";
    req.body.email != null ? editUser.email = req.body.email : "";
    req.body.password != null ? editUser.password = req.body.password : "";
    req.body.gender != null ? editUser.gender = req.body.gender : "";
    req.body.age != null ? editUser.age = req.body.age : "";
    req.body.Height != null ? editUser.Height = req.body.Height : "";
    req.body.Weight != null ? editUser.Weight = req.body.Weight : "";
    console.log("editUser");
    console.log(editUser);
    editUser.save();
    return editUser
}
exports.deleteUser = async (req) => {
    const result = await UserModel.findOne({ _id: req.params.id })
    const doc = await UserModel.deleteOne(result)

    return doc
}

exports.updateScore = async (req) => {
    const editUser = await UserModel.findOne({ _id: req.params.id })
    if (req.body.AllScore != null) {
        editUser.AllScore = req.body.AllScore;
    }
    editUser.save();
}
exports.uploadProfile = async (req, res) => {
    //Create an instance of the form object

    // console.log(req)
    let form = new formidable.IncomingForm();
    const editUser = await UserModel.findOne({ username: req.params.username })
    //Process the file upload in Node
    console.log(__dirname)
    var splitpath = __dirname.split("backend")
    splitpath.pop();
    var getPath = splitpath
    form.parse(req, function (error, fields, file) {
        let filepath = file.fileupload.filepath;
        let newpath = `${getPath}frontend\\Responsive Sidebar menu\\img-profile\\`;
        // newpath += file.fileupload.originalFilename;
        var newfilenamesplit = file.fileupload.originalFilename.split(".")
        var getfiletype = newfilenamesplit.pop();
        newpath += req.params.username + "." + getfiletype
        editUser.ProfilePath = req.params.username + "." + getfiletype
        editUser.save();
        console.log(filepath)
        console.log(newpath)
        //Copy the uploaded file to a custom folder
        try {
            fs.rename(filepath, newpath, function () {
                //Send a NodeJS file upload confirmation message

            });
        } catch (error) {
            console.log("Error :" + error)
        }

    });
    console.log("Upload File Finish");

}