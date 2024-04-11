import connectDB from "../..";
import Animal from "../../models/Animal";
import TrainingLog from "../../models/TrainingLog";

export default async function updateAnimalHours(data) {
    try {
        await connectDB();
        const { animalId, hours } = data;
        if (!animalId) {
            const e = new Error("Animal ID required");
            e.name = "InvalidParametersError";
            throw e;
        }
        let checkAnimal = await Animal.findById(animalId);
        if (!checkAnimal) {
            const e = new Error("Animal Not Found");
            e.name = "AnimalNotFoundError";
            throw e;
        }
        await Animal.findByIdAndUpdate(animalId, { hoursTrained: hours });
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
}