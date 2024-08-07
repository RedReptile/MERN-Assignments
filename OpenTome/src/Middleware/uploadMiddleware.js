const multer = require('multer');
const { diskStorage } = require('multer');
const path = require('path');

const re = new RegExp("\\s+", "g");
const sanitizeFileName = (imageName) => {
  return imageName.replace(re, "-").replace(/[^a-zA-Z0-9_\-\.]/g, "");
};

const filename = (req, file, next) => {
  let lastDotIndex = file.originalname.lastIndexOf(".");
  let originalname = file.originalname.substring(0, lastDotIndex);
  let ext = file.originalname.substring(lastDotIndex);
  next(null, `${sanitizeFileName(originalname)}-${Date.now()}${ext}`);
};

const filter = (req, file, next) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/gif",
    "application/pdf",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    next(null, true);
  } else {
    next(new Error("Only .jpeg, .jpg, .png, .gif and .pdf formats allowed!"));
  }
};

const getDestination = (folderName) => {
  return (req, file, next) => {
    next(null, path.join(__dirname, `../../uploads/${folderName}`));
  };
};

const bookImageStorage = diskStorage({
  destination: getDestination("books"),
  filename,
});

const bookImage = multer({
  storage: bookImageStorage,
  fileFilter: filter,
});

module.exports = { bookImage };
