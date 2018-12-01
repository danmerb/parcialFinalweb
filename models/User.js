const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema =new Schema({
    materia:{type:String,required:true},
    uv:{type:String,required:true},
    descripcion:{type:String,required:true}
});

module.exports=mongoose.model('users',userSchema );
