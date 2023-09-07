const jwt = require("jsonwebtoken")

module.exports = {
    createJWT : (payload) => {
        try {
            return jwt.sign(payload, "abc123", {
                expiresIn : "1h"
            })
        } catch (error) {
            return error
        }
    },

    verify: (req, res, next) => {
        try {
            const {token} = req.body
            console.log(token);
            const decodeData = jwt.verify(token, 'abc123')
            req.dataToken = decodeData 
            next()
        } catch (error) {
            res.send(error.message)
        }
    }
}
