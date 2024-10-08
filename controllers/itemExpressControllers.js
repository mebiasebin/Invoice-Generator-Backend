const itemModel = require('../models/itemModel')

const readAll =  async (req,res) => {
    try{
        let invoiceData = await itemModel.find();
        (invoiceData.length > 0)
            ?
                res.status(200).json({"data": invoiceData, "msg": "", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Item Found!", "error": ""});
    }
    catch(error){
        console.log({"data": "", "msg": "", "error": error.message});
        res.status(500).json({"data": "", "msg": "", "error": "Unable to read Item Data!"});
    }
}

const createInvoice = async (req,res) => {
    try{
        let data = req.body;
        const item = new itemModel(data);
        await item.save();
        res.status(201).json({"data": "", "msg": "Item Created Successfully!", "err": ""});
    }
    catch(error){
        console.log({"data": "", "msg": "", "error": error.message});
        res.status(500).json({"data": "", "msg": "", "error": "Unable to read Item Data!"});
    }
}

const deleteItem = async (req,res) => {
    try{
        let item = await itemModel.deleteOne({"_id": req.params.id});
        (item.deletedCount > 0)
            ?
                res.status(200).json({"data": "", "msg": "Item Deleted Successfully!", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Item Found!", "err": ""});
    }
    catch(error){
        console.log({"data": "", "msg": "", "error": error.message});
        res.status(500).json({"data": "", "msg": "", "error": "Unable to delete Item Data!"});
    }
}

const deleteAllItem = async (req,res) => {
    try{
        let item = await itemModel.deleteMany({});
        (item.deletedCount > 0)
            ?
                res.status(200).json({"data": "", "msg": "Items Deleted Successfully!", "err": ""})
            :
                res.status(404).json({"data": "", "msg": "No Items Found!", "err": ""});
    }
    catch(error){
        console.log({"data": "", "msg": "", "error": error.message});
        res.status(500).json({"data": "", "msg": "", "error": "Unable to delete Items!"});
    }
}

module.exports = {
    readAll,
    createInvoice,
    deleteItem,
    deleteAllItem
};
