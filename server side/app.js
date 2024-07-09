const express = require("express")
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const feedbackSchema = require('./model/feedbackSchema')
const PORT = 8080

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//mongo db connect
const DB_URI = mongoose.connect('mongodb+srv://eb20103087minhajwahid:School@cluster0.74h3z6i.mongodb.net/')
mongoose.connection.on('connected', ()=> console.log('mongodb connected sucessfuly'))
mongoose.connection.off('error', ()=> console.log(error.message))


//feedback api
app.post('/api/feedback/',(async (req,res)=>{
    try {

        const {comments} = req.body
        const objToSend = {
            comments
        }

        const saveComm = await feedbackSchema.create(objToSend)
        res.status(200).json({
           status: true,
           message: 'feedback get' ,
           data: saveComm
        })
        
    } catch (error) {
        res.status(400).json({status: false, message: error.message})
    }
}))

app.listen(PORT, ()=>{
    console.log('server is running on port https:')
})