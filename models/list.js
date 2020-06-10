const mongoose = require('mongoose');

//Schema of db
const listSchema = new mongoose.Schema({
   task : {
       type: String,
       required:true
   },
   description: {
       type: String,
       default:null
   },
   category:{
    type: String,
    required:true
   },
   dateOfCompletion:{
       type:Date,
       required:true
   },
   status:{
       type:Boolean,
       default:false
   }

},{ timestamps: true });

const TodoList = mongoose.model('List', listSchema);

module.exports = TodoList;
