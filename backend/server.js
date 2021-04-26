import express from 'express'
import userRouter from './userRouter.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const PORT = process.env.PORT || 5000;
dotenv.config()
const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/lmsusers',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',userRouter)


app.get('/',(req,res) => {
    res.send("Server is Ready")
});

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message})
})

app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`)
});