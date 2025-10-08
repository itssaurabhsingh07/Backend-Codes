import express from "express";
const app = express()

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello I am Pro Backend Developer" })
})

app.get("/add", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const sum = num1 + num2
    res.status(200).json({ message: `Now the Value Is ${sum}` })
})

app.get("/random",(req,res)=>{
    const randomnumber=Math.floor(Math.random()*100)+1
    res.status(200).json({message:`Now its my And your Response is ${randomnumber}`})
})
const port = 3000
app.listen(port, () => {
    console.log("Port Is Running ")
})