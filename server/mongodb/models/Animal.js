import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  hoursTrained: {
    type: Number,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

export default mongoose.models?.Animal ||
  mongoose.model("Animal", animalSchema);
