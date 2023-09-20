import user from "../schemas/User.js";
import "../connectDB.js";
import ProjectModel from "../schemas/Project.js";
// const user1 = new user({
//     first_name: 'soulayman',
//     last_name: 'chaayto',
//     Email: 's.c.2001@hotmail.com',
//     password: 'abc123',
//     projects: ''
//   });
  
//   // Insert the article in our MongoDB database
 // await user1.save();
const user1 = new user({
    first_name: 'hadi',
    last_name: 'faour',
    Email: 'hadi123@hotmail.com',
    password: 'abc123',
    projects: '650b045c15e9d936019c49fb'
  });
  
//   // Insert the article in our MongoDB database
  await user1.save();
const firstUser = await user.findOne();
console.log(firstUser);
