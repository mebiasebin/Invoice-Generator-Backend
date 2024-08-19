const fs = require('fs');

function createInvoice(req,res) {
    try{
        let data = {
            "id" : 5,
            "name" : "Divya",
            "email": "divya@gmail.com",
            "phone" : 7385035102
        }
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        invoiceData.push(data);
        fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
        // console.log("data: "," ","msg: ","File updated successfully ","error: "," ");
        res.write(JSON.stringify({"data":" ","msg":"File updated successfully ","error":" "}));
        res.end();
    }
    catch (error){
        // console.log("data: "," ","msg: "," ","error: ",error);
        res.write(JSON.stringify({"data":" ","msg":" ","error":error}));
        res.end();
    }
}

function readAll(req,res) {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        // console.log("data: ",invoiceData,"msg: "," ","error: "," ");
        res.write(JSON.stringify({"data":invoiceData,"msg":" ","error":" "}));
        res.end();
    }
    catch(error){
        // console.log("data: "," ","msg: "," ","error: ",error);
        res.write(JSON.stringify({"data":" ","msg":" ","error":error}));
        res.end();
    }
}

function readItem(req,res,id) {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        let result = invoiceData.filter(v => v.id === id);
        // console.log("data: ",result,"msg: "," ","error: "," ");
        res.write(JSON.stringify({"data":result,"msg":" ","error":" "}));
        res.end();
    }
    catch(error){
        // console.log("data: "," ","msg: "," ","error: ",error);
        res.write(JSON.stringify({"data":" ","msg":" ","error":error}));
        res.end();
    }
}

const deleteItem = (req,res,id) => {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        invoiceData = invoiceData.filter(v => v.id !== id);
        fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
        // console.log("data: ",invoiceData,"msg: "," ","error: "," ");
        res.write(JSON.stringify({"data":invoiceData,"msg":" ","error":" "}));
        res.end();
    }
    catch(error){
        // console.log("data: "," ","msg: "," ","error: ",error);
        res.write(JSON.stringify({"data":" ","msg":" ","error":error}));
        res.end();
    }
}

const updateItem = (req,res) => {
    try{
        let data = {
            "id" : 1,
            "name" : "Johnson",
            "email": "johnson@gmail.com",
            "phone" : 7398495102
        }
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        for(let i=0; i<invoiceData.length;i++){
            if(invoiceData[i].id === data.id){
                invoiceData[i] = {...invoiceData[i], ...data};
                break;
            }
        }
        fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
        // console.log("data: ",invoiceData,"msg: "," ","error: "," ");
        res.write(JSON.stringify({"data":invoiceData,"msg":" ","error":" "}));
        res.end();
    }
    catch(error){
        // console.log("data: "," ","msg: "," ","error: ",error);
        res.write(JSON.stringify({"data":" ","msg":" ","error":error}));
        res.end();
    }
}

module.exports = {
    createInvoice,
    readAll,
    readItem,
    deleteItem,
    updateItem
}