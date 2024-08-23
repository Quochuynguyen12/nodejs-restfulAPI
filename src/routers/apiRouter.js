const express = require('express');
var router = express.Router();
const path = require("path");
const { createaccount, getAllAccounts, updateAccounts, deleteOneAccount, pagination } = require("../controllers/homecontroller");
const conn = require("../config/connectDB");


router.post("/appaccount", createaccount);
router.get("/getallaccounts", getAllAccounts)
router.put("/updataaccounts/:id", updateAccounts)
router.delete("/delete/:id", deleteOneAccount)
router.get("/Account", pagination)
// router.get("/home" , (req,res,next)=>{
//     res.sendFile(path.join(__dirname, './src/public/index.html'));
// })
router.get("/", (req, res, next) => {
    conn.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json("fall server");
        })
})
router.post("/", (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    conn.create({
        username: username,
        password: password
    })
        .then(data => {
            res.json("them thanh cong");
        })
        .catch(err => {
            res.status(500).json("fall server");
        })
})
router.put("/:id", (req, res) => {
    var id = req.params.id;
    var newpassword = req.body.password;
    conn.findByIdAndUpdate(id, {
        password: newpassword

    })
        .then(data => {
            res.json("update thanh cong")
        })
        .catch(err => {
            res.status(500).json("fall");
        })
})
router.delete("/:id", (req, res) => {
    var id = req.params.id;
    conn.deleteOne({
        _id: id
    })
        .then(data => {
            res.json("da xoa thanh cong");
        })
        .catch(err => {
            res.status(500).json("fall");
        })
})
module.exports = router