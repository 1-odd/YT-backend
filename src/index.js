// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js"
dotenv.config()













connectDB()














/*
import  express  from "express";
const app = express();


// iffies function it execute just after function

; ( async ()=> {
    try {

      await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME} `)

      app.on("error" , (error)=>{
        console.log('Error in connection')
        throw error
      })

      app.listen(process.env.PORT, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
      })


    } 
    catch (error) {
        console.error("Error: " ,error);
        throw err
    }
} )()

*/