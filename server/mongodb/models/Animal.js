import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    ownerId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    breed : {
        type : String,
        required : true
    },
    hoursTrained : {
        type : Number,
        required : true
    },
    birthday : {
        type : Date,
        required : true
    },
    note : String,
    userName : String
});

export default mongoose.models?.Animal || mongoose.model("Animal", animalSchema);