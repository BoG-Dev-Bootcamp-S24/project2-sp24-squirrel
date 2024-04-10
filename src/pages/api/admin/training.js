const TrainingLog = require('./models/TrainingLog');

async function getAllTrainingLogs() {
  try {
    const trainingLogs = await TrainingLog.find();
    return trainingLogs;
  } catch (error) {
    throw new Error('Failed to fetch training logs');
  }
}

module.exports = {
  getAllTrainingLogs
};