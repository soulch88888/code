import mongoose, { SchemaTypes }  from 'mongoose';
const { Schema, model } = mongoose;

const ProjectSchema = new Schema({
  title : {
    type : String,
    required : true
},
  team_members : {
    type : SchemaTypes.ObjectId,
    ref : 'user',
    required : true
  },
  team_leader : {
    type : SchemaTypes.ObjectId,
    ref : 'user',
    required : true
    },
  tasks : {
    type : SchemaTypes.ObjectId,
    ref : 'task'
  },
  createdAt : Date
});

const ProjectModel = model('Project', ProjectSchema);
export default ProjectModel;