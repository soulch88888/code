import '../connectDB.js';
import project from '../schemas/Project.js';
const project1 = await project.deleteOne({ title: "mern stack project" })
console.log(project1)