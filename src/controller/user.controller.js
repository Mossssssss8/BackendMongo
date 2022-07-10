const UserService = require("../service/user.service")
exports.addUser = async (req, res) => {
    try {
        const UserModel = req.body
        if (await checkUsernameAndEmail(UserModel)) {
            const createUser = await UserService.addUser(req)
            return res.status(200).json({ data: createUser })
        } else return res.status(200).json({ data: false })
    } catch (error) {
        return res.status(500)
    }

}
exports.getUser = async (req, res) => {
    try {
        const allUser = await UserService.getUser()
        return res.status(200).json({ data: allUser })
    } catch (error) {
        return res.status(500)
    }
}
exports.updateUser = async (req, res) => {
    try {
        const User = await UserService.updateUser(req)
        return res.status(200).json({ data: User })
    } catch (error) {
        return res.status(500)

    }
}
exports.deleteUser = async (req, res) => {
    try {
        const Delete = await UserService.deleteUser(req)
        return res.status(200).json({ data: Delete })
    } catch (error) {
        return res.status(500)
    }
}

exports.login = async (req, res) => {
    try {
        var user = await checkLogin(req.body);
        var Canlogin = false;
        // ถ้าเข้า Function CheckLogin แล้วมี User จริง ตัวแปร user จะ มีค่าเป็นข้อมูลต่างๆ ของ user นั้น แต่ถ้า ไม่เจอ username และ password ตัวแปร user จะเป็น false
        console.log(user)
        if (user != false) {
            Canlogin = true;
        }
        if (Canlogin) {
            return res.status(200).json({ data: user })
        } else {
            return res.status(200).json(false)
        }

    } catch (error) {
        return res.status(500)
    }

}
exports.getOneUser = async (req, res) => {
    try {
        const inputId = req.params.id;
        // inputId = "6203f371694711377885f981"
        const allUser = await UserService.getUser()
        var user = {};
        allUser.forEach(u => {
            if (u._id == inputId) {
                user = u;
            }
        })
        return res.status(200).json({ data: user });
    } catch (error) {
        return res.status(500);
    }
}

exports.UpdateScore = async (req, res) => {
    try {
        const UserId = req.params.id;
        await UserService.updateScore(req);
        return res.status(200).json({ "Status": "Done" });
    } catch (error) {
        return res.status(500);
    }
}

exports.GetUserScore = async (req, res) => {
    try {
        const inputId = req.params.id;
        // inputId = "6203f371694711377885f981"
        const allUser = await UserService.getUser()
        var user = {};
        allUser.forEach(u => {
            if (u._id == inputId) {
                user = u;
            }
        })
        var ForReturnScore = {
            _id: user._id,
            username: user.username,
            AllScore: user.AllScore
        }
        return res.status(200).json({ data: ForReturnScore });
    } catch (error) {
        return res.status(500);
    }
}
exports.ForgotPassword = async (req, res) => {
    try {
        console.log(req.body)
        const allUser = await UserService.getUser()
        var isSuccess = false;
        var request = req.body;
        var user = {
            _id: '',
            username:'',
            newpassword: ''
        };
        allUser.forEach(u => {
            if (u.username == request.username && u.email == request.email) {
                user._id = u._id;
                user.username = request.username;
                user.newpassword = request.newpass;
                isSuccess = true;
            }
        })
        if (isSuccess) {
            
            await UserService.ChangeNewPassword(user);
            return res.status(200).json({ status: "Success" });
        } else {
            return res.status(200).json({ status: "username not found!" });
        }
    } catch (error) {
        return res.status(500);
    }
}

exports.uploadProfile = async (req, res) => {
    console.log("Upload File!!!");
    try {
        await UserService.uploadProfile(req, res);
        return res.status(200).json({ "Status": "Done" });
    } catch (err) {
        return res.status(500);
    }

}

//function

async function checkUsernameAndEmail(user) {

    var allUser = await UserService.getUser()
    var IsTrue = true

    allUser.forEach(u => {
        if (u.username == user.username || u.email == user.email) {
            IsTrue = false
        }
    })
    return IsTrue
}

async function checkLogin(user) {
    var allUser = await UserService.getUser()
    var forReturn = false
    allUser.forEach(u => {
        if (u.username == user.username || u.email == user.username) {
            if (u.password == user.password) {
                forReturn = u
            }

        }
    })
    return forReturn
}
