import mongoose from 'mongoose'
// import Task from './schemas/task'

const url = "mongodb+srv://soulch88:Mohd.272001@cluster0.yy7zwdk.mongodb.net/";
export const connectdb = async(dbURL) => {
    try{
        await mongoose.connect(dbURL).then(
            () => console.log("connected successfully ......"),
            (err) => console.log("connection error ", err)
        );
    } catch (error) {
        console.log(error);
    }
    

};
connectdb(url);

