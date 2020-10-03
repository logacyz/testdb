const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var corsOptions={
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const db=require("./app/models");
db.sequelize.sync();

app.get("/",(req,res)=>{
    res.json({message: "Welcome to my application."})
});

require("./app/routes/tutorial.routes")(app)

app.listen(8080,()=>{
    console.log("Server start at port 8080");
});