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
  totalHours: {
    type: Number,
    required: true,
  },
  birthMonth: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Number,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
});

export default mongoose.models?.Animal ||
  mongoose.model("Animal", animalSchema);
