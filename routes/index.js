const express = require("express")
const router = express.Router()


//test route
router.get('/test', (req, res)=>{
    res.status(200).json({
        status: "OK",
        message: "Hello"
    })
})

module.exports = router