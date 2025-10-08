import express from "express"
const app=express()

app.get("/add",(req,res)=>{
    const add=req.query.num1
    const add2=req.query.num2

    res.json({sum:add+add2})

    //res.status(200).json({message:`Now the Value Is `})
})