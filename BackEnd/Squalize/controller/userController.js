const db = require("./../models")

module.exports = {
    findUsers : async(req, res) => {
        try {
            const findUsers = await db.user.findAll()
            console.log(findUsers);
        } catch (error) {
            console.log(error);
        }
    },

    createUser : async(req, res) => {
        const {username, email, password, consignee, address, phone_number} = req.body
        
        const createUser = await db.user.create({username, email, password})
        const createAddress = await db.useraddress.create({
            consignee, address, phone_number, user_id : createUser.dataValues.id
        })
        console.log(createAddress);
    }
}