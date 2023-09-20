import '../connectDB.js';
import user from '../schemas/User.js';
const userFind = await user.findOne({ first_name: "soulayman" });
console.log(userFind)
// const userWhere = await user.where("first name").equals("soulayman").select("email");
// console.log(userWhere)