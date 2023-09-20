import task from "../schemas/Task.js";
import "../connectDB.js";
// const task1 = new task({
//     title: 'create the database',
//     body: 'create the tables, the relations and the E-R diagram',
//     author: '65058bb07685d935eec914f7',
//     tags: ['featured', 'announcement'],
//     assigned_userId : '65058bb07685d935eec914f7'
//   });
  
//   // Insert the article in our MongoDB database
//   await task1.save();
  const firstTask = await task.findOne({});
console.log(firstTask);