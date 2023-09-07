const fs = require('fs')

module.exports = {
    deleteFiles: (files) => {
        // console.log("...");
        // console.log(files.images);
        // console.log(",,,");
        files.images.forEach(value => {
            fs.unlinkSync(value.path)
        })
    }
}

