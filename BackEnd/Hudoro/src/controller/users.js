const UsersModel = require("../models/users")
// kita bikin function nya disini, biar di routesnya tinggal panggil functionnya jadi di routes nya bersih
const getAllUsers = async (req, res) => {
    try {
        console.log(test);
        const [data] = await UsersModel.getAllUsers()
        res.json({
            message : "data berhasil di get",
            data : data
        })
    } catch (error) {
        res.json({
            message : "error",
            err : error
        })
    }

}

const postAllUsers = (req, res) => {
    console.log(req.body);
    res.json (
        {
            message : "POST Users Success"
        }
    )
}

module.exports = { // import kedua function dalam bentuk object
    getAllUsers,
    postAllUsers
}