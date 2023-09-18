import mongoose, { SchemaTypes } from 'mongoose';

const { Schema, model } = mongoose;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const UserSchema = new Schema({
  first_name : String,
  last_name : String,
  Email :{ 
    type : String,
    required : true,
    unique : true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

},
  age : Number,
  password : {
    type : String,
    required : true
},
  gender :  {type: String,
  enum:['male','female']
},
projects: { 
    type : mongoose.Types.ObjectId,
    ref : 'Project'
}
});

const User = model('User', UserSchema);
export default User;
