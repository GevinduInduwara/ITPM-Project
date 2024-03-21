const PackageModel = require('../common/models/packageModel')


const addPackage = async (req, res, next) => {
  const { name, members, accomodation, meal, transport, destinations } = req.body 
  let package

  try {
    package = new PackageModel({
        name,
        members,
        accomodation,
        meal,
        transport,
        destinations

    })
    await package.save()
  } catch (err) {
    console.log(err)
  }

  return res.status(201).json({package})
}

const getAllPackage = async (req, res, next) => {
  try {
    const package = await PackageModel.find({})
    res.status(200).json(package)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getPackage = async (req, res, next) => {
  const id = req.params.id
  let package

  try {
    package = await PackageModel.findById(id)
  } catch (err) {
    console.log(err)
  }

  return res.status(201).json({ package })
}

const updatePackage = async (req, res, next) => {
  const id = req.params.id
  const { name, members, accomodation, meal, transport, destinations } = req.body 

  let package

  try {
    package = await PackageModel.findByIdAndUpdate(id, {
        name, members, accomodation, meal, transport, destinations
    })
    package = await package.save()
  } catch (err) {
    console.log(err)
  }

  return res.status(200).json({ package })
}

const deletePackage = async (req, res, next) => {
  try {
    await PackageModel.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

module.exports = {
    addPackage,
    getAllPackage,
    getPackage,
    updatePackage,
    deletePackage
}
