import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    age: Number,
    gender: String,
    course: String,
    termsAccepted: {type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Student', studentSchema);
