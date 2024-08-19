const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const conn = require('./services/db');
conn.dbConnection();

const itemRoutes = require('./routes/itemRoutes')
app.use("/api/v1/items", itemRoutes)

app.use("/*", (req,res) => { 
    res.send("No routes");
});

app.listen(4000, () => console.log("Server is running in port: 4000"));