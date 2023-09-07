const multer = require("multer");
const fs = require("fs");

const defaultPath = "public";
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const isDirectoryExist = fs.existsSync(defaultPath);
    if (!isDirectoryExist) {
      await fs.promises.mkdir(defaultPath, { recursive: true });
    }
    cb(null, `${defaultPath}`);
  },
  
  filename: (req, file, cb) => {
    const extension = file.mimetype.split('/')[1]
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + `.${extension}`
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// setup file filter
var fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    // acc

    cb(null, true);
  } else if (file.mimetype.split("/")[0] !== "image") {
    // reject
    cb(new Error("file must be image!"))
  }
};

exports.MulterUploud = multer({ storage: storage, fileFilter : fileFilter });
