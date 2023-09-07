const apikey = (req, res, next) => {
    const {apikey} = req.headers
    console.log(apikey);
    if(!apikey) return res.send("maaf apikey tidak ada")
    if(apikey !== "raka") return res.send("maaf apikey tidak cocok")
    next()
}

module.exports = {
    apikey
}
