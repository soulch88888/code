import '../../config/connectDB.js';
import ProjectModel from '../../models/Project.js';
const project1 = await ProjectModel.deleteOne({ title: "mern stack project" })
console.log(project1)