const mongoose = require('mongoose');
const TodoList = require('../models/list');


//add new task function
module.exports.addTask =  function(request,response){
    TodoList.create({
        task:request.body.taskTopic,
        description:request.body.description,
        category:request.body.category,
        dateOfCompletion:request.body.date,
        
    },function(err,newTask){
     if(err){
         console.log('error in inserting task');
         return response.redirect('back');
     }
     console.log('Added new task------>',newTask);
     return response.redirect('back');
    });     
}

//delete task function
module.exports.deleteTask =  function(request,response){
    let id = request.query.id;
    
    // find the contact in datbase using if and delete
    TodoList.findByIdAndDelete(id,function(err){
    if(err){
        console.log('Error in deleting the task from database');
        return;
    }
    return response.redirect('back');
    });     
}

//mark task as complete and update value to true
module.exports.markComplete = function(request,response){
    let id = request.query.id;
    TodoList.findById(id,function(err,getTask){
        if(err){
            console.log(err);
            return;
        }
        getTask.status = true;
        getTask.save();
        return response.redirect('back');
        });  

}

//mark task incomplete and update value to false
module.exports.markInComplete = function(request,response){
    let id = request.query.id;
    TodoList.findById(id,function(err,getTask){
        if(err){
            console.log(err);
            return;
        }
        getTask.status = false;
        getTask.save();
        return response.redirect('back');
        });  

}