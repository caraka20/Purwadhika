const {MulterUploud} = require("../lib/multer");
const {deleteFiles} = require("../helper/deleteFiles")

const upload = async(req, res, next) => {
    // res.send(MulterUploud);
    const result = MulterUploud.fields([{name: 'images', maxCount: 2}])
    result(req, res, function(err){
        try {
            if(err) throw err
            req.files.images.forEach(value => {
                if (value.size > 1000000000) throw {message : `${value.originalname} file kebesaran`, files : req.files}
            });
            next()
        } catch (error) {
            deleteFiles(error.files)
            next(error)
        }
    })

}

module.exports = upload