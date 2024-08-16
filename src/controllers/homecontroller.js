const express = require("express");
const conn = require("../config/connectDB");
const bodyparser = require("body-parser");
const router = require("../routers/apiRouter");


const createaccount = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    // for(let i; i< 20; i++){
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
    // }
}

const getAllAccounts = (req, res) => {
    conn.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(500).json("not get All data")
        })
}
const updateAccounts = (req, res) => {
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
}
const deleteOneAccount = (req, res) => {
    var id = req.params.id;

    conn.deleteOne({
        _id: id
    })
        .then(data => {
            res.json("deleted");
        })
        .catch(err => {
            res.status(500).json("can't delete")
        })
}
module.exports = { createaccount, getAllAccounts, updateAccounts, deleteOneAccount };

//test 