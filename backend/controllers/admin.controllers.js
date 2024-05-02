const User = require("../models/user.models");
const fs = require("fs");
const path = require("path");

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      return "User removed successfully";
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// async function updateRole(req, res){
//     try{
//         const user = await User.findById(req.params.id);
//         if(user){
//             user.role = req.body.role;
//             const updatedUser = await user.save();
//             res.json(updatedUser);
//         }else{
//             res.status(404).json({ message: 'User not found' });
//         }
//     }catch(error){
//         res.status(500).json({ message: error.message });
//     }
// }

async function updateUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.role = req.body.role || user.role;
      user.phone = req.body.phone || user.phone;
      const updatedUser = await user.save();
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const uploadImage = async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      throw new Error("No file uploaded");
    }

    const image = req.files.file;
    const user = await User.findById(req.body.id);

    // Check file type
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(image.name).toLowerCase());
    const mimetype = filetypes.test(image.mimetype);

    if (!extname || !mimetype) {
      throw new Error("Invalid file type");
    }

    // Create directory if it doesn't exist
    if (!fs.existsSync("./uploads/")) {
      fs.mkdirSync("./uploads/");
    }

    // Move the file to the uploads directory
    const filePath = `./uploads/${image.name}`;
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.role = req.body.role || user.role;
      user.phone = req.body.phone || user.phone;
      user.photo = filePath || null;
      await user.save();
    }
    image.mv(filePath, (err) => {
      if (err) {
        console.error(err);
        throw new Error("Failed to upload image");
      } else {
        return res.status(200).json({ message: "Image uploaded successfully"});
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error!" });
  }
};

module.exports = { getUsers, deleteUser, updateUser, getUser, uploadImage };
