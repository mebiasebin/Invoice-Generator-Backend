// const fs = require('fs');

// const readAll =  (req,res) => {
//     try{
//         let invoiceData = fs.readFileSync("./invoice.json","utf8");
//         invoiceData = JSON.parse(invoiceData);
//         // console.log("data: ",invoiceData,"msg: "," ","error: "," ");
//         res.json({"data":invoiceData,"msg":" ","error":" "});
//         res.end();
//     }
//     catch(error){
//         // console.log("data: "," ","msg: "," ","error: ",error);
//         res.json({"data":" ","msg":" ","error":error});
//         res.end();
//     }
//     // res.send("Read Invoice");
// }

// const readItem = (req,res) => {
//     try{
//         // const name= req.query.name;
//         // const email = req.query.email;
//         // const phone = req.query.phone;
//         // console.log(req.query);
//         // console.log(req.query.name, req.query.email, req.query.phone);
//         // const { name, email, phone } = req.query;
//         // const key = req.query.key;
//         // console.log(key);
//         // res.send("Read a Item");
//         let id = req.query.id;
//         // console.log(id);
//         let invoiceData = fs.readFileSync("./invoice.json","utf8");
//         invoiceData = JSON.parse(invoiceData);
//         // console.log(invoiceData);
//         let result = invoiceData.filter(v => v.id === id);
//         // console.log(result);
//         // console.log("data: ",result,"msg: "," ","error: "," ");
//         res.json({"data":result,"msg":" ","error":" "});
//         res.end();
//     }
//     catch(error){
//         // console.log("data: "," ","msg: "," ","error: ",error);
//         res.json({"data":" ","msg":" ","error":error});
//         res.end();
//     }
    
// }

// const createInvoice = (req,res) => {
//     try{
//         let data = req.body;
//         // console.log(data);
//         let invoiceData = fs.readFileSync("./invoice.json","utf8");
//         invoiceData = JSON.parse(invoiceData);
//         // console.log(invoiceData);
//         invoiceData.push(data);
//         // console.log(invoiceData.push(data));
//         fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
//         // console.log("data: "," ","msg: ","File updated successfully ","error: "," ");
//         res.status(200).json({"data":invoiceData,"msg":"File updated successfully ","error":" "});
//         res.end();
//     }
//     catch (error){
//         // console.log("data: "," ","msg: "," ","error: ",error);
//         res.json({"data":" ","msg":" ","error":error});
//         res.end();
//     }
//     // res.send("Invoice Created");
// }

// const deleteItem = (req,res) => {
//     try{
//         let id = req.params.id;
//         console.log(id);
//         let invoiceData = fs.readFileSync("./invoice.json","utf8");
//         invoiceData = JSON.parse(invoiceData);
//         console.log(invoiceData);
//         invoiceData = invoiceData.filter(v => v.id !== id);
//         console.log(invoiceData);
//         fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
//         // console.log("data: ",invoiceData,"msg: "," ","error: "," ");
//         res.status(200).json({"data":invoiceData,"msg":" ","error":" "});
//         res.end();
//     }
//     catch(error){
//         // console.log("data: "," ","msg: "," ","error: ",error);
//         res.json({"data":" ","msg":" ","error":error});
//         res.end();
//     }
//     // res.send("Item deleted");
// }

// const updateItem = (req,res) => {
//     try{
//         let data = {
//             "id" : 1,
//             "name" : "Raman",
//             "email": "Raman@gmail.com",
//             "phone" : 7398495102
//         }
//         let invoiceData = fs.readFileSync("./invoice.json","utf8");
//         invoiceData = JSON.parse(invoiceData);
//         for(let i=0; i<invoiceData.length;i++){
//             if(invoiceData[i].id === data.id){
//                 invoiceData[i] = {...invoiceData[i], ...data};
//                 break;
//             }
//         }
//         fs.writeFileSync("./invoice.json",JSON.stringify(invoiceData));
//         // console.log("data: ",invoiceData,"msg: "," ","error: "," ");
//         res.status(200).json({"data":invoiceData,"msg":" ","error":" "});
//         res.end();
//     }
//     catch(error){
//         // console.log("data: "," ","msg: "," ","error: ",error);
//         res.json({"data":" ","msg":" ","error":error});
//         res.end();
//     }
//     // console.log(req.body);
//     // res.send("Item Updated");
// }

// module.exports = {
//     readAll,
//     readItem,
//     createInvoice,
//     deleteItem,
//     updateItem
// };