const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname,'public')));
 
app.get('/gethello',(req,res)=>{
    res.send("Hellooo NodeJs!!!!")
});

app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
});

