const db = require("../connection/db")
const util = require("util")
const query = util.promisify(db.query).bind(db)

module.exports = {
    register : async (req, res) => {
        try {
            // const input = req.body
            // const SQL = `SELECT * FROM users`
            // const SQL2 = `INSERT INTO users(username = ?, email) VALUES ("${input.username}", "${input.email}");`
            // await db.execute(SQL2)
            // res.status(200).send({
            //     isError: false,
            //     message: "data berhasil post",
            //     data: input
            // })
            await query ("START TRANSACTION")
            // 1. ambil data users from body
            const {username, email, address, city, province} = req.body

            // 2. validasi email dan username
            const findEmail = await query ("SELECT * FROM users WHERE email = ? OR username = ?", [email, username])

            // 3. if email or username register, send response
            if (findEmail.length) return res.status(200).send({
                isError : true,
                message : "email udah ada",
                data : null
            })

            // 4. if email or username available, insert
            const insertUser = await query(`INSERT INTO users SET ?`, {username, email})
            await query(`INSERT INTO users_address SET ?`, {address, city, province, users_id : insertUser.insertId})
            await query("COMMit")

            // 5. send response success
            res.status(201).send({
                isError : false,
                message: "akun berhasil registrasi",
                data: null
            })

        } catch (error) {
            await query("ROLLBACK")
            res.send(error.message)
        }
    },

    login : async (req, res) => {
        try {
            const input = req.query
            console.log(input);
            const SQL = `SELECT * FROM users WHERE username = "${input.username}" AND email="${input.email}"`
            const [login] = await db.execute(SQL)
            res.send({
                message : "berhasil login",
                data : login
            })
        } catch (error) {
            res.send(error.message)
        }
    },

    productList : async (req, res) => {
        const SQL = `SELECT * FROM product`
        const [product] = await db.execute(SQL)
        res.send(product)
    },

    filter : async (req, res) => {
        try {
            // const {kategori_id} = req.query
            // const SQL = `SELECT * FROM product WHERE kategori_id="${kategori_id}"`
            // const [hasil] = await db.execute(SQL)
            // res.send(hasil)
            const {kategoriId} = req.query
            const arrKategoriId = kategoriId.split("-")
            let queryFilter = "SELECT * FROM product p WHERE "
            let newArr = arrKategoriId.map(value => `kategori_id = ${value}`)
            newArr = newArr.join(" OR ")
            queryFilter += newArr
            const filterByKategori = await query(queryFilter)
            res.send(filterByKategori)
        } catch (error) {
            res.send(error.message)
        }
    },
    detailProduct : async (req, res) => {

        try {
            const {id} = req.params
            const findDetail = await query (`SELECT p.id, p.name, p.price, pi.url, phs.stock, s.size FROM product p
            JOIN products_images pi ON p.id = pi.product_id
            JOIN product_has_size phs ON p.id = phs.product_id
            JOIN size s ON phs.size_id = s.id
            WHERE p.id = ?
            `, [id])
    
            const dataToSend = {
                id : findDetail[0].id,
                name : findDetail[0].name,
                price : findDetail[0].price,
                images : [],
                stocks : [],
                sizes : []
            }

            findDetail.forEach((value) => {
                if(!dataToSend.images.includes(value.url)) dataToSend.images.push(value.url)
                if(!dataToSend.sizes.includes(value.size)) dataToSend.sizes.push(value.size)
                if(dataToSend.stocks.length < dataToSend.sizes.length) dataToSend.stocks.push(value.stock)
            });

            console.log(findDetail);
            res.status(200).send({
                isError: false,
                message: "OK",
                data: dataToSend
            })
        } catch (error) {
            res.send(error.message)
        }

    }
}