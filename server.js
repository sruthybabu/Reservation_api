const express=require("express");
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require("./app/models");

app.get("/",(req,res)=>{
    res.json({message:"Reservation Project"});
});

require("./app/routes/passengers.routes")(app);

app.listen(8080,()=>{
    console.log("App Server is Running");
});