import mongoose from "mongoose";

const schema = new mongoose.Schema({
  publicId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Asset = mongoose.models.assets || mongoose.model("assets", schema);
export default Asset;
