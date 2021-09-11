
const express = require('express')
const app = express()





app.get('/app3',(req,res)=>
{
    res.send("From /app3 path instance2 ")
})


app.get('/app4',(req,res)=>
{
    res.send("From /app4 path instance2 ")
})




app.listen(8080,() =>
{
    console.log("The container has started listening on port 8050")
 
  
})
