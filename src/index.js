(function(){
  'use strict';
})();

window.onload = function(){
  var list = new List();


  document.getElementById('add_todo_form').addEventListener('submit', function(event) {
    event.preventDefault();
    var todoText = document.getElementById('todo_text').value;

    list.addToList(todoText);
    ul = document.getElementById('todo_list');
    ul.innerHTML = '';
    document.getElementById('todo_text').value = '';
    for( var i = 0 ; i < list.viewList().length ; i++ ){
      li = document.createElement('LI');
      li.innerHTML = list.viewList()[i];
      ul.appendChild(li);
    }
  });

};
