import project from "../schemas/Project.js";

import "../connectDB.js";
const project1 = new project({
    title: 'mern stack project',
    team_leader: '65058bb07685d935eec914f7',
    team_members: '65058bb07685d935eec914f7',
    tasks : '65058cb57429f12e23aaac02'
  });
  
  // Insert the article in our MongoDB database
  await project1.save();
  const firstProject = await project.findOne({});
console.log(firstProject);