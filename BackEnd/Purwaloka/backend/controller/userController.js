const db = require("../models");
const { createJWT } = require("../lib/jwt");
const transporter = require("../helper/transporter");
const fs = require("fs").promises;
const handlebars = require("handlebars");

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.query;
      const findUser = await db.user.findOne({
        where: {
          email,
          password,
        },
      });
      console.log(findUser);
      const token = await createJWT({ id: findUser.dataValues.id });
      res.status(200).send({
        isError: false,
        message: "login success",
        data: token,
      });
    } catch (error) {
      res.status(200).send({
        message: "user not found",
      });
    }
  },

  register: async (req, res) => {
    try {
      const { nama_lengkap, email, password } = req.body;
      function getRandomCode() {
        let result = '';
        for (let i = 0; i < 5; i++) {
          const randomDigit = Math.floor(Math.random() * 10);
          result += randomDigit;
        }
        return result;
    }
    let random = getRandomCode()

      const input = await db.user.create({
        nama_lengkap,
        email,
        password,
        status: "tidak ok",
        kode : random
      });
      const jwt = await createJWT({ id: input.dataValues.id });
      console.log( "ini jwt register >  " + jwt);
      const readTemplate = await fs.readFile(
        "./template/template.html",
        "utf-8"
      );
      const compiledTemplate = await handlebars.compile(readTemplate);
      const newTemplate = compiledTemplate({ nama_lengkap, id: jwt, random:random });
      await transporter.sendMail({
        from: "puwaloka",
        to: "carakawijaya20@gmail.com",
        subject: "done bang done",
        html: newTemplate,
      });

      res.status(200).send({
        isError: false,
        message: "berhasil register",
        data: input,
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateStatus: async (req, res) => {
    try {
      const { id } = req.dataToken;
      console.log(id); // id sebenarnya 50, udh bukan encripsi lagi
      await db.user.update({ status: "OK" }, { where: { id } });
      res.status(200).send("berhasil OK");
    } catch (error) {
      res.send(error);
    }
  },

  updateKode : async (req, res) => {
    try {
      const {id} = req.dataToken
      const {kode} = req.body
      const data = await db.user.findOne({where : {id, kode}})
      if (!data) {
        return res.status(201).send({
          isError : true,
          message : "maaf kode yang anda masukan salah"
        })
      }
      await db.user.update({status : "OK"}, {where : {id : id}})
      res.status(200).send({
        isError : false,
        message : "berhasil OK OK"
      })
    } catch (error) {
      return res.send({
        isError : true,
        message : error
      })
    }
  },

};
