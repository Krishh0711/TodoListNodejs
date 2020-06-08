const mongoose = require('mongoose');
const TodoList = require('../models/list');

module.exports.home = function(request, response){
    TodoList.find({},function(err,todolist){
        if(err){
            console.log('error in fetching list from db');
        }
        return response.render('home',{
            title:'TodoList',
            todolist:todolist
        });
    });
    
}