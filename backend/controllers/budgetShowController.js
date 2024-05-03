const PackageModel = require('../models/packageModel');
const oneDayTour = require('../controllers/oneDayTourController');

const calculateTotalCost = async () => {
  try {
    // Get the last package and last location data
    const lastPackage = await PackageModel.findOne().sort({ _id: -1 });
    const lastLocation = await oneDayTour.getOneDayTour;
     console.log(lastLocation, '2fjhhhhhhhhhhhhhhhhhhhh',lastPackage )
    if (!lastPackage || !lastLocation) {
      throw new Error('No data found');
    }

    // Define the accommodation and meal costs per person
    const accommodationCosts = {
      '2-star': 3000,
      '3-star': 6000,
      '4-star': 15000,
      '5-star': 20000
    };

    const mealCosts = {
      breakfast: 1000,
      lunch: 2000,
      dinner: 1500
    };

    // Define the transport costs per 1 km
    const transportCosts = {
      car: 200,
      van: 400,
      bus: 500
    };

    // Get values from the last package data
    const { members, accommodation, meal, transport } = lastPackage;

    // Calculate the total cost based on the members, accommodation, meal, and transport
    const accommodationCost = members * accommodationCosts[accommodation];
    const mealCost = members * meal.reduce((total, m) => total + mealCosts[m], 0);
    const transportCost = members * transportCosts[transport] * lastLocation;

    const totalCost = accommodationCost + mealCost + transportCost;

    return totalCost;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  calculateTotalCost
}

// calculateTotalCost()
//   .then(totalCost => {
//     return res.status(200).json({totalCost});

//   })
//   .catch(error => {
//     console.error('Error calculating total cost:', error);
//   });