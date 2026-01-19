import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    age: Number,
    gender: String,
    course: String,
    termsAccepted: Boolean,
    createdAt: Date
});

export default studentSchema;
