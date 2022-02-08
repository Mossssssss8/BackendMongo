const UserService = require("../service/user.service")
exports.addUser = async(req, res) => {
    try {
        const createUser = await UserService.addUser(req)
        return res.status(200).json({ data: createUser })
    } catch (error) {
        return res.status(500)
    }

}
exports.getUser = async(req, res) => {
    try {
        const allUser = await UserService.getUser(req)
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