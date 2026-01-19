import express from 'express';
import mongoose from 'mongoose';
import Student from './models/student.js'
import cors from 'cors';
// Allows the frontend to communicate with the backend.

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({express: true}));
app.use(express.static('public'));


await mongoose.connect(`mongodb+srv://shlomo1839:4ym7tk4mdb@cluster0.kosyfnf.mongodb.net/collegeDB`);

app.post("/register", async (req, res) => {
    try {
        if (req.body.termsAccepted === 'on') {
            req.body.termsAccepted = true;
        } else {
            req.body.termsAccepted = false;
        }
    
        console.log("Data received:", req.body);
        const student = new Student(req.body);
        await student.save();
        res.send("Success")
    } catch (err) {
        console.error("The Error:", err);
        res.status(400).send("Error")
    }
});

app.use("./student",  async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.json(allStudents)
    } catch (err) {
        res.status(500).send("Error fetching student")
    }
    
});

app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`)})