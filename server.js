const express = require("express");
const app = express();


app.get("/api", (req, res)=>{
    res.json({
        success : 1,
        message : " Api start full "
    });
});

app.listen((8081), ()=>{
    console.log(" Server working ")
});