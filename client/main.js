import { Template } from 'meteor/templating';import './main.html';

var todos= [{ text: "test", done:true},{text: "test",done: true  },{text: "test",done:false  },{text: "test"  }
];

Template.todolist.helpers({
  todos: function(){  return todos;}
 ,
});


Template.todolist.events({
  "click #button": function(){
todo.push({ text: "test"          });
  }
});
