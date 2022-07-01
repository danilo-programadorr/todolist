'use strict';

var banco = [{
  'tarefa': 'Estudando',
  'status': ''
}, {
  'tarefa': 'jogar',
  'status': ''
}]; // const inputForm = document.querySelectorAll('.input-form')
// const inputForms = document.querySelector('.input-form')
// const input1 = inputForms[0]
// const input2 = inputForms[1]

var createMyList = function createMyList(tarefa, indice, status) {
  //  const inputTarefa = tarefa.input1
  //  const inputDescription = description.input2
  //  console.log(inputTarefa,inputDescription)
  var item = document.createElement('div');
  item.classList.add('todo-item');
  item.innerHTML = "\n  <div class=\"trash\" data-indice=".concat(indice, "></div >\n  <div class=\"edit\"></div>\n  <input type=\"checkbox\" class=\"input\" ").concat(status, " data-indice=").concat(indice, ">\n  <label class=\"content-tarefa\" for=\"input\">").concat(tarefa, "</label><br>\n  <div class=\"line\"></div>\n  "); // <label class="description" for="input">${description}</label>

  document.querySelector('.todo-list').appendChild(item);
};

var limparTarefas = function limparTarefas() {
  var todoList = document.querySelector('.todo-list');

  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

var renderScreen = function renderScreen() {
  limparTarefas();
  banco.forEach(function (item, indice) {
    return createMyList(item.tarefa, item.status, indice);
  });
};

var inserirItem = function inserirItem(event) {
  var tecla = event.key;
  var text = event.target.value;

  if (tecla === 'Enter') {
    banco.push({
      'tarefa': text
    });
    renderScreen();
    event.target.value = '';
  }
};

var clickItem = function clickItem(event) {
  var element = event.target;
  console.log(element);
};

document.addEventListener('click', clickItem);
document.querySelector('.input-form').addEventListener('keypress', inserirItem);
renderScreen();