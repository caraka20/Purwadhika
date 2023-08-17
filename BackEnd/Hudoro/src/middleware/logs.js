const logRequest = (req, res, next) => {
    console.log("log terjadi request Middleware kedua");
    next()
}

module.exports = logRequest