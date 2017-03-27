import { Template } from 'meteor/templating';import './main.html';

Template.todolist.helpers({
  todos: function(){  return [{ text: "test", done:true},{text: "test",done: true  },{text: "test",done:false  },{text: "test"  }
]}
 ,
});
