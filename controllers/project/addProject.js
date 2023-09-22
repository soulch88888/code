import ProjectModel from "../../models/Project.js";

import "../../config/connectDB.js";
const project1 = new ProjectModel({
    title: 'mongoDB',
    team_leader: '65058bb07685d935eec914f7',
    team_members: '650d916f333569dce2deb192',
    tasks : '65058cb57429f12e23aaac02'
  });
  
  // Insert the article in our MongoDB database
  await project1.save();
  const firstProject = await ProjectModel.findOne({});
console.log(firstProject);