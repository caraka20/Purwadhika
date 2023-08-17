const http = require('http')
const fs = require("fs")

const PORT = 4000

const server = http.createServer(async (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    if(req.url === "/" && req.method === "GET") { // req untuk mengambil informasi dari client, res untuk mengirim hasil menuju client
        res.writeHead(200, "OK")
        res.write("<h1>Hello, World</h1>")
        res.end()
    } else if (req.url === "/users") {
        if (req.method === "GET") {
            const {users} = JSON.parse(fs.readFileSync("./db/db.json"))

            res.writeHead(200, "OK")
            res.write(JSON.stringify(users))
            res.end()
        }
    }
})

server.listen(PORT, ()=> {
    console.log("mulai");
})