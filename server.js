const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000
require("dotenv").config;
const router = require("./src/routers/apiRouter");
const bodyparser = require("body-parser");
const conn = require("./src/config/connectDB");
const controllers = require("./src/controllers/homecontroller");


app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/public', express.static(path.join(__dirname, '/public')))
// const checklogin = (req , res , next) => {
//     if(dangnhap){
//         req.user = user

//         next()
//     }else{
//         res.json("ban cho dang nhap");
//     }
// }

// mongoose.connect("mongodb://localhost:27017/DbStudent");

// const accountSchenma = new mongoose.Schem   a({
//     username: String,
//     password: String
// })
// const accountModel = mongoose.model("acount", accountSchenma);


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    conn.findOne({ username: username })
        .then(data => {
            if (data) {
                res.json("user đã tồn tại");
            } else {
                // Hash the password before saving
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
            if (data) { // Only if user was created
                res.json("tạo tài khoản thành công");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("không thành công");
        });
});
app.post("/login", (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    conn.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                res.json("dang nhap thanh cong");
            } else {
                res.status(300).json("username or password not true");
            }
        })
        .catch(err => {
            res.status(500).json("not connect server");
        })
})
// const connectdb = (req, res, next) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     conn.create({
//         username: username,
//         password: password
//     })
//         .then(data => {
//             res.json("ta thanh cong")
//         })
//         .catch(err => {
//             res.status(500).json("ko thanh cong");
//         })
// }


// app.use("/api/v1", router);
app.use("/api/account", router);
app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

