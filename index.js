const fs = require('fs');

function createInvoice(data) {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        invoiceData.push(data);
        fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
        console.log("data: "," ","msg: ","File updated successfully ","error: "," ");
    }
    catch (error){
        console.log("data: "," ","msg: "," ","error: ",error);
    }
}

function readAll() {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        console.log("data: ",invoiceData,"msg: "," ","error: "," ");
    }
    catch(error){
        console.log("data: "," ","msg: "," ","error: ",error);
    }
}

function readItem(id) {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        let result = invoiceData.filter(v => v.id === id);
        console.log("data: ",result,"msg: "," ","error: "," ");
    }
    catch(error){
        console.log("data: "," ","msg: "," ","error: ",error);
    }
}

const deleteItem = (id) => {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        invoiceData = invoiceData.filter(v => v.id !== id);
        fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
        console.log("data: ",invoiceData,"msg: "," ","error: "," ");
    }
    catch(error){
        console.log("data: "," ","msg: "," ","error: ",error);
    }
}

const updateItem = (data) => {
    try{
        let invoiceData = fs.readFileSync("./invoice.json","utf8");
        invoiceData = JSON.parse(invoiceData);
        for(let i=0; i<invoiceData.length;i++){
            if(invoiceData[i].id === data.id){
                invoiceData[i] = {...invoiceData[i], ...data};
                break;
            }
        }
        fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
        console.log("data: ",invoiceData,"msg: "," ","error: "," ");
    }
    catch(error){
        console.log("data: "," ","msg: "," ","error: ",error);
    }
}

let data = {
    "id" : 1,
    "name" : "John",
    "email": "john@gmail.com",
    "phone" : 7398495102
}
createInvoice(data);
//readAll();
//readItem(1);
//deleteItem(1);
//updateItem(data);