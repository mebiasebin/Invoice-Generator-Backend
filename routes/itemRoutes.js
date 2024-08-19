const router = require('express').Router();
const itemController = require('../controllers/itemExpressControllers');

router.get("/readAll", itemController.readAll);

router.post("/createInvoice", itemController.createInvoice);

router.delete("/deleteItem/:id", itemController.deleteItem);

router.delete("/deleteAllItem", itemController.deleteAllItem);

module.exports = router;
