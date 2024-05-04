const LocationModel = require('../models/locationModel')
const PackageModel = require('../models/packageModel')

let totalDistance = '';

const addOneDayTour = async (req, res, next) => {
    const { pickup, first, second, third } = req.body;
  
    try {
      if (!pickup || !first) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      const location = new LocationModel({
        pickup,
        first,
        second,
        third
      });
  
      await location.save();
  
      return res.status(201).json({ location });
    } catch (error) {
      console.error('Error saving location:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  const getOneDayTour = async (req, res, next) => {
    try {
      const lastData = await LocationModel.findOne().sort({ _id: -1 });
      if (!lastData) {
        return res.status(404).json({ error: 'No data found' });
      }
  
      // Define the pickup location coordinates
      const pickupLat = lastData.pickup[0]?.lat;
      const pickupLng = lastData.pickup[0]?.lng;
  
      // Define the coordinates for first location
      const firstLat = lastData.first[0]?.lat;
      const firstLng = lastData.first[0]?.lng;
      const firstAddress = lastData.first[0]?.formattedAddress;
  
      // Define the coordinates for second location
      let secondLat = lastData.second[0]?.lat || 0;
      let secondLng = lastData.second[0]?.lng || 0;
      let secondAddress = lastData.second[0]?.formattedAddress || "";
  
      // Define the coordinates for third location
      let thirdLat = lastData.third[0]?.lat || 0;
      let thirdLng = lastData.third[0]?.lng || 0;
      let thirdAddress = lastData.third[0]?.formattedAddress || "";
  
      // Check if coordinates are valid for pickup and first location
      if (!pickupLat || !pickupLng || !firstLat || !firstLng) {
        return res.status(400).json({ error: 'Invalid coordinates' });
      }
  
      // Check if second and third values are passed from the frontend
      if (req.body.second || req.body.third) {
        secondLat = req.body.second.lat || 0;
        secondLng = req.body.second.lng || 0;
        secondAddress = req.body.second.formattedAddress || "";
        thirdLat = req.body.third.lat || 0;
        thirdLng = req.body.third.lng || 0;
        thirdAddress = req.body.third.formattedAddress || "";
      }
  
      // Calculate distances if second and third values are provided
      const distanceFirst = calculateDistance(pickupLat, pickupLng, firstLat, firstLng);
      const distanceSecond = secondLat && secondLng ? calculateDistance(pickupLat, pickupLng, secondLat, secondLng) : 0;
      const distanceThird = thirdLat && thirdLng ? calculateDistance(pickupLat, pickupLng, thirdLat, thirdLng) : 0;
      const distanceFirstSecond = secondLat && secondLng ? calculateDistance(firstLat, firstLng, secondLat, secondLng) : 0;
      const distanceSecondThird = thirdLat && thirdLng ? calculateDistance(secondLat, secondLng, thirdLat, thirdLng) : 0;
  
      totalDistance = distanceFirst + distanceFirstSecond + distanceSecondThird;
  
      if (totalDistance > 400) {
        return res.status(400).json({ error: 'Total distance exceeds the limit of 200, because this is one day tour' });
      }
  
      // Construct and return the sortedDistances array
      const sortedDistances = [
        { plat: pickupLat, plng: pickupLng },
        { address: firstAddress, distance: distanceFirst, flat: firstLat, flng: firstLng },
        { address: secondAddress, distance: distanceSecond, slat: secondLat, slng: secondLng },
        { address: thirdAddress, distance: distanceThird, tlat: thirdLat, tlng: thirdLng }
      ].sort((a, b) => a.distance - b.distance);
      return res.status(200).json({ sortedDistances, totalDistance});
    } catch (error) {
      console.error('Error processing locations:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
      

      // Function to calculate distance between two coordinates
      function calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadiusKm = 6371;
      
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
      
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
        return earthRadiusKm * c;
      }
      
      // Function to convert degrees to radians
      function toRad(degrees) {
        return degrees * (Math.PI / 180);
      }
      
    };


    const calculateTotalCost = async (req, res, next) => {
      try {
    
        const lastPackage = await PackageModel.findOne().sort({ _id: -1 });
        const accommodationRates = {
          '2-star': 3000,
          '3-star': 6000,
          '4-star': 15000,
          '5-star': 20000,
        };
        const mealRates = {
          breakfast: 1000,
          lunch: 2000,
          dinner: 1500,
        };
        const transportRates = {
          car: 200,
          van: 400,
          bus: 500,
        };
        const accommodationCost = lastPackage.members * accommodationRates[lastPackage.accomodation];
        const mealCost = lastPackage.meal.reduce((total, meal) => total + mealRates[meal], 0) * lastPackage.members;
        const transportCost = transportRates[lastPackage.transport] * totalDistance;
        const totalCost = accommodationCost + mealCost + transportCost;
         const totalAmount = (totalCost).toFixed(2)

        const eachAmount = [
          { accommodation: accommodationCost},
          { meal: mealCost },
          { transport: transportCost},
          { totalamount: totalAmount}
        ]
    
        return res.status(200).json({ eachAmount });
      } catch (error) {
        console.error('Error in someOtherFunction:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    };
    

  module.exports = {
    addOneDayTour,
    getOneDayTour,
    calculateTotalCost
}