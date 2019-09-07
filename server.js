const express = require('express');
const app = express();
const mongoose = require('./Config/db');
const db = mongoose.connection;
const cors=require('cors');
app.use(cors)
db.once('open', function() {
  console.log("connection wala chala")
  console.log("Database Connected Successfully");
});

app.listen(30001, () => {
    console.log("Server connected to localhost!")
})
app.use(express.json());

app.use('/', require('./router/index'));