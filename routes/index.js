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
        res.status(404).json({
            status: "Fail",
            error
        })
        
    }
})

//get all feedback
router.get('/feedback', async (req, res) =>{
    try {
        const feedbackItems = await Feedback.find().sort({createdAt: 1}).lean().exec()
        const count = feedbackItems.length
        return res.status(200).json({count, feedbackItems})
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            error
        })
    }
})

module.exports = router