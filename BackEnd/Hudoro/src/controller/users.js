
// kita bikin function nya disini, biar di routesnya tinggal panggil functionnya jadi di routes nya bersih
const getAllUsers = (req, res) => {
    res.json(
        {
            message : "GET All Users Success"
        }
    )
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