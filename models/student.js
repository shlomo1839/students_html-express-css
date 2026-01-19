import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    age: Number,
    gender: String,
    course: String,
    termsAccepted: Boolean,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Student', studentSchema);
