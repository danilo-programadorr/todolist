'use strict';
/* <div class="todo-item">
<div class="trash"></div>
<div class="edit"></div>
<input type="checkbox" class="input">
<label class="content-tarefa" for="input">tarefa</label><br>
<div class="line"></div>
<label class="description" for="input">descrição</label>
</div> */

var createMyList = function createMyList(tarefa, description) {
  var item = document.createElement('div');
  item.classList.add('todo-item');
  item.innerHTML = "\n      <div class=\"trash\"></div>\n      <div class=\"edit\"></div>\n      <input type=\"checkbox\" class=\"input\">\n      <label class=\"content-tarefa\" for=\"input\">".concat(tarefa, "</label><br>\n      <div class=\"line\"></div>\n      <label class=\"description\" for=\"input\">").concat(description, "</label>\n  ");
  document.querySelector('.todo-list').appendChild(item);
};