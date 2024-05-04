const express = require("express");

const router = express.Router();

const offerController = require("../controllers/offerController");

router.get("/", offerController.getAllOffers);
router.post("/create", offerController.addOffer);
router.get("/get/:id", offerController.getOffer);
router.put("/update/:id", offerController.updateOffer);
router.delete("/delete/:id", offerController.deleteOffer);

module.exports = router;
