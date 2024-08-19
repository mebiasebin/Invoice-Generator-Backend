const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

// const conn = require('../services/db');
// conn.dbConnection();

const itemSchema = new Schema({
    "item": String,
    "quantity": Number,
    "price": Number
})

const itemModel = mongoose.model("Items",itemSchema);

module.exports = itemModel;