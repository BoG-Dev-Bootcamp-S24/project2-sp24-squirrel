const mongoose = require('mongoose');

const trainingLogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  animalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal',
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
  }
});

export default mongoose.models?.TrainingLog || mongoose.model("TrainingLog", trainingLogSchema)