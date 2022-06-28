const express = require("express")
const router = express.Router()
const Feedback = require('../models/feedback.js')


//test route
router.get('/test', (req, res)=>{
    res.status(200).json({
        status: "OK",
        message: "Hello"
    })
})

//create new feedback item
router.post('/feedback', async (req, res)=>{
    try {
        const newFeedback = await Feedback.create(req.body)
        return res.status(200).json(newFeedback)
        
    } catch (error) {
        res.status(200).json({
            status: "Fail",
            error
        })
        
    }
})

module.exports = router