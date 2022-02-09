const UserService = require("../service/user.service")
exports.addUser = async(req, res) => {
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
exports.getUser = async(req, res) => {
    try {
        const allUser = await UserService.getUser()
        return res.status(200).json({ data: allUser })
    } catch (error) {
        return res.status(500)
    }
}
exports.updateUser = async(req, res) => {
    try {
        const User = await UserService.updateUser(req)
        return res.status(200).json({ data: User })
    } catch (error) {
        return res.status(500)

    }
}
exports.deleteUser = async(req, res) => {
    try {
        const Delete = await UserService.deleteUser(req)
        return res.status(200).json({ data: Delete })
    } catch (error) {
        return res.status(500)
    }
}

exports.login = async(req, res) => {
    console.log(req.body)
    try {
        if (await checkLogin(req.body)) {

            return res.status(200).json(true)
        } else {
            return res.status(200).json(false)
        }


    } catch (error) {
        return res.status(500)
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
    var Canlogin = false
    allUser.forEach(u => {
        console.log(`login user.username: ${user.username} == u.username: ${u.username} `)
        if (u.username == user.username || u.email == user.username) {
            if (u.password == user.password) {
                Canlogin = true
                return Canlogin
            }

        }
    })
    return Canlogin
}