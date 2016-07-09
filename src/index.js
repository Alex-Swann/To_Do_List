(function(){
  'use strict';
})();

window.onload = function(){
  var list = new List();
  var todoListUl = document.getElementById('todo_list');
  var textField = document.getElementById('todo_text');

  document.getElementById('add_todo_form').addEventListener('submit', function(event) {
    event.preventDefault();

    todoText = textField.value;
    list.addToList(todoText, TodoItem);

    clearScreen();

    showList(todoListUl, list.viewList());
  });


  // var array = document.getElementById('ul');
  // for(var i; i < array.length; i++){
  //   array.addEventListener('li', function(){
  //     list.viewList()[i].changeStatus();
  //   });



  function showList(ul, array) {
    for( var i = 0 ; i < array.length ; i++ ){
      li = document.createElement('LI');
      taskDescription = array[i].getTask();
      completionStatus = array[i].getStatus() ? 'Completed' : 'Not Completed';
      li.innerHTML = taskDescription + ' ' + completionStatus;
      ul.appendChild(li);

    }
  }

  function clearScreen() {
    textField.value = '';
    todoListUl.innerHTML = '';
  }

};
