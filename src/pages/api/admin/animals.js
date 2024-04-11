const Animal = require('./models/Animal');

async function getAllAnimals() {
  try {
    const animals = await Animal.find();
    return animals;
  } catch (error) {
    throw new Error('Failed to fetch animals');
  }
}

module.exports = {
  getAllAnimals
};
