import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import multer from "multer";
import connectDB from "./config/db.js";
import GalleryItem from "./models/galleryModel.js";
const app = express();
const Port = 3000;
connectDB();

const filelocation = "../frontend/public/images";

app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

async function getCountOfGalleryItems() {
  try {
    const count = await GalleryItem.countDocuments({});
    return count;
  } catch (error) {
    console.log(error);
    return -1; // Return -1 to indicate an error
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filelocation);
  },
  filename: function (req, file, cb) {
    const fileExtension = file.mimetype.split("/")[1];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    let filename = `${uniqueSuffix}.${fileExtension}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

app.get("/api/data", (req, res) => {
  GalleryItem.find({})
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
});

app.post("/api/data", upload.single("file"), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const file = req.file;
  getCountOfGalleryItems()
  .then(function (data) {
    console.log(data);
    let count = data+1;
    const obj = new GalleryItem({
      id: count,
      title: title,
      description: description,
      url: `/images/${file.filename}`,
    });
    obj.save()
     // Replace with the actual file path
  
    res.send("data sent");
  });



});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
