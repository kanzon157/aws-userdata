
const express = require('express')
const app = express()





app.get('/app3',(req,res)=>
{
    res.send("From /app3 path ")
})


app.get('/app4',(req,res)=>
{
    res.send("From /app4 path  ")
})




app.listen(8050,() =>
{
    console.log("The container has started listening on port 8050")
 
  
})
