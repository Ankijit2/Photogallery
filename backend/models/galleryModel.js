import { Schema,model,mongoose } from "mongoose";

const GallerySchema = new mongoose.Schema(
    {

    id: {
      type: Number,
      required: [true, "message"],
    },
      title: {
        type:String,
        required: [true,"message"]
      },
      description: {
          type:String,
          required: [true,"message"]
        },
      url: {
          type:String,
          required: [true,"message"]
        },
    },
    { versionKey: false }
  );
const GalleryItem = mongoose.model("users", GallerySchema);

export default GalleryItem



