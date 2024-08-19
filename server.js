// const invoices = require('./invoiceModules');
// invoices.readAll();

// // const { createInvoice, readAll } = require('./invoiceModules');
// // readAll();

const { read } = require('fs');
const http = require('http');
const { readAll, readItem, createInvoice,deleteItem,updateItem } = require('./invoiceModules');
http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    switch(req.url){
        case "/readAll":
            readAll(req,res);
            break;
        case "/readItem":
            readItem(req,res,id);
            break;
        case "/createInvoice":
            createInvoice(req,res);
            break;
        case "/deleteItem":
            deleteItem(req,res,id);
            break;
        case "/updateItem":
            updateItem(req,res);
            break;
        default:
            res.write("No Route Found");
            res.end();
            break;
    }

}).listen(4000, () => console.log("Server is running in port: 4000"));