import '../connectDB.js'
import user from '../schemas/User.js';
const UserD1 = await user.deleteOne({ first_name: "hadi" })
console.log(UserD1)