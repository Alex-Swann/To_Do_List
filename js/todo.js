(function(){
  'use strict';
})();



function List(){
  this.list = [];
}

List.prototype = {

  viewList: function(){
    var ul = document.getElementById("todoList");
      this.list.sort(function(a, b) {
        return a.id - b.id;
      });
        for (var i = 0; i < this.list.length; i++) {
            var todoItem = this.list[i];
            var li = document.createElement("li");
            li.innerHTML =
                'Task No:  ' + todoItem.id +
                "<br>" + "  Task:  " + todoItem.text +
                "<br>" + "  Completed:  " + todoItem.completed;
            ul.appendChild(li);
    }
  },

  addItem: function(item){
    this.list.push(item);
    this.list.sort(function(a, b) {
      return a.id - b.id;
    });
  },
};

var todos = [];
var list = new List();

function getTodoData() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://quiet-beach-24792.herokuapp.com/todos.json");
    request.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) {
                parseTodoItems(this.responseText);
                addTodosToPage();
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}

function parseTodoItems(todoJSON) {
    if (todoJSON === null || todoJSON.trim() === "") {
        return;
    }
    var todoArray = JSON.parse(todoJSON);
    if (todoArray.length === 0) {
        console.log("Error: the to-do list array is empty!");
        return;
    }
    for (var i = 0; i < todoArray.length; i++) {
        var todoItem = todoArray[i];
        todos.push(todoItem);
    }
}

function addTodosToPage() {
    for (var i = 0; i < todos.length; i++) {
        var todoItem = todos[i];
        list.addItem(todoItem);
      }
      list.viewList();
}
