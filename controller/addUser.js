import user from "../schemas/User.js";
import "../connectDB.js";
// const user1 = new user({
//     first_name: 'soulayman',
//     last_name: 'chaayto',
//     Email: 's.c.2001@hotmail.com',
//     password: 'abc123',
//     projects: ''
//   });
  
//   // Insert the article in our MongoDB database
//   await user1.save();
const firstUser = await user.findOne().populate(projects);
console.log(firstUser);
firstUser.projects = "65058fec31ed81dd8b2cb75b";
await firstUser.save();
console.log(firstUser);
