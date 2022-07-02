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

//get a feedback item
router.get('/feedback/:id', async (req, res) =>{
    try {
        const feedbackItems = await Feedback.find({_id: req.params.id}).lean().exec()
        return res.status(200).json({count: 1, feedbackItems})
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

router.patch('/feedback/:id', async (req, res) =>{
    try {
        const updated = await Feedback.findOneAndUpdate({_id: req.params.id}, req.body)
        return res.status(201).json({
            status: "Success",
            updated
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            error
        })
    }
})

router.delete('/feedback/:id', async (req, res) =>{
    try {
        const deleted = await Feedback.findOneAndDelete({_id: req.params.id})
        console.log(deleted)
        return res.status(204).json({
            status: "Deleted successfully"
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            error
        })
    }
})

module.exports = router