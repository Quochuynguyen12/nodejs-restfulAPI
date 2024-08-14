const express = require("express");
const conn = require("../config/connectDB");
const bodyparser = require("body-parser");
const router = require("../routers/apiRouter");


const createaccount = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    conn.findOne({ username: username })
        .then(data => {
            if (data) {
                res.json("user đã tồn tại");
            } else {
                return bcrypt.hash(password, saltRounds)
                    .then(hashedPassword => {
                        return conn.create({
                            username: username,
                            password: hashedPassword
                        });
                    });
            }
        })
        .then(data => {
            if (data) {
                res.json("tạo tài khoản thành công");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("không thành công");
        });
}
module.exports = createaccount;

//test 