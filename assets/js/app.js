'use strict';

/* <div class="todo-item">
<div class="trash"></div>
<div class="edit"></div>
<input type="checkbox" class="input">
<label class="content-tarefa" for="input">tarefa</label><br>
<div class="line"></div>
<label class="description" for="input">descrição</label>
</div> */

const createMyList = (tarefa,description) => {
  const item = document.createElement('div')
  item.classList.add('todo-item')
  item.innerHTML = `
      <div class="trash"></div>
      <div class="edit"></div>
      <input type="checkbox" class="input">
      <label class="content-tarefa" for="input">${tarefa}</label><br>
      <div class="line"></div>
      <label class="description" for="input">${description}</label>
  `
 document.querySelector('.todo-list').appendChild(item)
}