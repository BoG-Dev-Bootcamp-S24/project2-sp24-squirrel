const mongoose = require('mongoose');

const trainingLogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  animal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal',
    required: true,
  },
  trainedHours: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  }
});

export default mongoose.models?.TrainingLog || mongoose.model("TrainingLog", trainingLogSchema)