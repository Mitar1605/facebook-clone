import express from "express";
import mongoose from "mongoose";
import { userPost } from "./controllers/userController.js";

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect('mongodb+srv://safaryanmxitar:Ptptikmxo14@cluster0.4rft26q.mongodb.net/test')
.then(() => console.log("DB is OK!"))
.catch((err) => console.log("DB ERROR", err))

app.get('/testData', (req, res) => {
    res.send([
        {
            a: 'sadas',
            b: 'sadasas'
        },
        {
            a: 'ghf',
            b: 'fgjf'
        }
    ])
})
app.post('/auth/register', (req, res) => {
    userPost(req, res)
})

app.listen(3001)