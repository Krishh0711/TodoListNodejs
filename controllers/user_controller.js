const mongoose = require('mongoose');
const TodoList = require('../models/list');

module.exports.addTask =  function(request,response){
    TodoList.create({
        task:request.body.taskTopic,
        description:request.body.description,
        category:request.body.category,
        dateOfCompletion:request.body.date,
        
    },function(err,newTask){
     if(err){
         console.log('error in inserting task');
         return;
     }
     console.log('Added new task------>',newTask);
     return response.redirect('back');
    });     
}