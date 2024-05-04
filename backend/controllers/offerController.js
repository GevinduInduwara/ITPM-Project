const offerModel = require("../models/offerModel");

const addOffer = async (req, res, next) => {
  const {
    offerTitle,
    previousPrice,
    discountPrice,
    offerDescription,
    startDate,
    endDate,
  } = req.body;
  let offer;

  try {
    offer = new offerModel({
      offerTitle,
      previousPrice,
      discountPrice,
      offerDescription,
      startDate,
      endDate,
    });
    await offer.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ offer });
};

const getAllOffers = async (req, res, next) => {
  try {
    const offers = await offerModel.find({});
    res.status(200).json(offers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getOffer = async (req, res, next) => {
  const id = req.params.id;
  let offer;

  try {
    offer = await offerModel.findById(id);
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ offer });
};

const updateOffer = async (req, res, next) => {
  const id = req.params.id;
  const {
    offerTitle,
    previousPrice,
    discountPrice,
    offerDescription,
    startDate,
    endDate,
  } = req.body;

  let offer;

  try {
    offer = await offerModel.findByIdAndUpdate(
      id,
      {
        offerTitle,
        previousPrice,
        discountPrice,
        offerDescription,
        startDate,
        endDate,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ offer });
};

const deleteOffer = async (req, res, next) => {
  try {
    await offerModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Offer deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  addOffer,
  getAllOffers,
  getOffer,
  updateOffer,
  deleteOffer,
};
