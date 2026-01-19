import express from 'express';
import { mongoose } from 'mongoose';
import Student from './models/student.js'
// import studentSchema from './models/student.js';


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({express: true}));
app.use(express.static('public'));


await mongoose.connect(`mongodb+srv://shlomo1839:4ym7tk4mdb@cluster0.kosyfnf.mongodb.net`);

app.post("./register", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save;
        res.send("Success")
    } catch (err) {
        res.status(401).send("Error")
    }
});

app.use("./student",  async (req, res) => {
    const allStudents = await Student.find();
    res.json(allStudents)
});

app.listen(PORT, () => { console.log("server is running")})