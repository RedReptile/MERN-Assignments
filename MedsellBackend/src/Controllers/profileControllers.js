const domain = "http://localhost:4000";
const UserProfiles = require("../Models/userProfile");

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  res.status(500).json({ msg: error.message });
};

// Update user profile as it is created during registration
const updateUserProfile = async (req, res) => {
  try {
    const { bio } = req.body;
    let updateData = { bio };

    if (req.file) {
      const profileImage = `${domain}/uploads/profiles/${req.file.filename}`;
      updateData.profileImage = profileImage;
    }

    const profile = await UserProfiles.findOneAndUpdate(
      { user: req.user.id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }

    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfiles.findOne({ user: req.user._id }).populate(
      "user",
      ["name", "email"]
    );
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all user profiles
const getAllUserProfiles = async (req, res) => {
  try {
    const profiles = await UserProfiles.find().populate("user", [
      "name",
      "email",
    ]);
    res.status(200).json({ profiles });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Controller to update a product using PATCH
const updateProductPartial = async (req, res) => {
  try {
    const { id } = req.params;

    // Ensure category is a valid ObjectId if provided
    if (req.body.category && !mongoose.Types.ObjectId.isValid(req.body.category)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    // Update image path if a new file is provided
    if (req.file) {
      req.body.image = req.file.path;
    }

    // Find the product by ID and update it with the new data
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', err });
  }
};

// Get user profile by ID
const getUserProfileById = async (req, res) => {
  try {
    const profile = await UserProfiles.findOne({
      user: req.params.id,
    }).populate("user", ["name", "email"]);
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ profile });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete user profile
const deleteUserProfile = async (req, res) => {
  try {
    const profile = await UserProfiles.findOneAndDelete({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.status(200).json({ msg: "Profile deleted successfully" });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

//  exporting the controller functions
module.exports = {
  updateUserProfile,
  getUserProfile,
  updateProductPartial,
  getAllUserProfiles,
  getUserProfileById,
  deleteUserProfile,
};