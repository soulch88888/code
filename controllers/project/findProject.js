import '../../config/connectDB.js';
import ProjectModel from '../../models/Project.js';
import task from '../../models/Task.js';
import User from '../../models/User.js';
const ProjectFind = await ProjectModel.findOne({ title: "mern stack project" }).populate({path:"team_members", select:['first_name','last_name']}).populate({path:"team_leader", select:['first_name','last_name']}).populate({path:"related_tasks", select:['title']});
console.log(ProjectFind)