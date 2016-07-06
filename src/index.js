document.getElementById('add_todo_form').addEventListener('submit', function(event) {
  event.preventDefault();
  var todoText = document.getElementById('todo_text').value;
  var list = new List();
  list.addToList(todoText);
  ul = document.getElementById('todo_list');
  li = document.createElement('LI');
  li.innerHTML = list.viewList()
  ul.appendChild(li);
})
