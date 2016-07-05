document.getElementById('add_todo_form').addEventListener('submit', function(event) {
  event.preventDefault();
  ul = document.getElementById('todo_list');
  li = document.createElement('LI');
  li.innerHTML = document.getElementById('todo_text').value;
  ul.appendChild(li);
})
