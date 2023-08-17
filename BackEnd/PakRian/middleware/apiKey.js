const apiKey = (req, res, next) => {
    const {apiKey} = req.body

    if (!apiKey) return res.send("api key not found")
    if(apiKey !== "abc123") return res.send("api key eroor!")

    next()
}

module.exports = {
    apiKey
}