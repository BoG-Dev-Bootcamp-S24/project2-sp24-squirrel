import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function getAllTrainingLogs() {
    try {
        await connectDB();
        return JSON.stringify(await TrainingLog.find());
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}