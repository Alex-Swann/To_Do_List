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
    console.log(list.viewList());
  });

  function showList(ul, array) {
    for( var i = 0 ; i < array.length ; i++ ){
      li = document.createElement('LI');
      li.innerHTML = array[i].getTask();
      ul.appendChild(li);
    }
  }

  function clearScreen() {
    textField.value = '';
    todoListUl.innerHTML = '';
  }

};
