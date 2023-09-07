const conection = require("../config/database");

const getAllUsers = () => {
    const SQL = "SELECT * FROM `express`"
    return conection.execute(SQL)
}

module.exports = {
    getAllUsers
}
