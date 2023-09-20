import '../connectDB.js'
import task from '../schemas/Task.js';
const taskD1 = await task.deleteOne({ title: "create the database" })
console.log(taskD1)