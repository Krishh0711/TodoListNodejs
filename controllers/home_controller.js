const mongoose = require('mongoose');
const TodoList = require('../models/list');


//Loading home controller by fetching details from db
module.exports.home = function(request, response){
    TodoList.find({},function(err,todolist){
        if(err){
            console.log('error in fetching list from db');
        }
        return response.render('home',{
            title:'TodoList',
            todolist:todolist,
            status:todolist.status
        });
    });
    
}