
const express = require('express')
const app = express()





app.get('/app3',(req,res)=>
{
    res.send("From /app3 path i am "+process.env.hostname)
})


app.get('/app4',(req,res)=>
{
    res.send("From /app4 path i am "+process.env.hostname)
})




app.listen(8050,() =>
{
    console.log("The container has started listening on port 8050")
 
  
})
