const router = require('express').Router();
const itemController = require('../controllers/itemExpressControllers');

router.get("/readAll", itemController.readAll);

router.get("/readItem", itemController.readItem);

router.post("/createInvoice", itemController.createInvoice);

router.delete("/deleteItem/:name", itemController.deleteItem);

router.put("/updateItem", itemController.updateItem);

module.exports = router;