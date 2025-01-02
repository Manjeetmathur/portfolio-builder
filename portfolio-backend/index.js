import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
import { app } from "./app.js"
import path from 'path'
import express from 'express'
dotenv.config({
       path : "./.env"
})

const __dirname = path.resolve()


app.use(express.static(path.join(__dirname,'/portfolio/dist')))
app.get("*",(req,res) => {
       res.sendFile(path.resolve(__dirname,'portfolio','dist','index.html'))
})

connectDB()
.then(() => {
       app.listen(8000 || process.env.PORT, () => {
              console.log("hii i'm running");
              
       })
       
})
.catch((err) => {
       console.log("err : ",err);
       
})




