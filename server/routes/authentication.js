const express = require('express')
const router = express.Router()
const authService = require('../services/authentication')

//TODO change this to POST and test with postman
router.get("/login", (req,res) =>{
    res.cookie("token", authService.login(req))
    res.send("Yerrrrr")
})

router.post("/signup", (req,res) => {
    const {body} = res

    //save data if valid


    //assign token


    //send token
})

module.exports = router;