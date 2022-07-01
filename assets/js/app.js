'use strict';


let banco = [{
    'tarefa': 'Estudando','status': '' 
  },
  {
    'tarefa': 'jogar','status': ''
  }

]
// const inputForm = document.querySelectorAll('.input-form')

// const inputForms = document.querySelector('.input-form')
// const input1 = inputForms[0]
// const input2 = inputForms[1]

const createMyList = (tarefa,indice,status) => {
//  const inputTarefa = tarefa.input1
//  const inputDescription = description.input2
//  console.log(inputTarefa,inputDescription)
  const item = document.createElement('div')
  item.classList.add('todo-item')
  item.innerHTML = `
  <div class="trash" data-indice=${indice}></div >
  <div class="edit"></div>
  <input type="checkbox" class="input" ${status} data-indice=${indice}>
  <label class="content-tarefa" for="input">${tarefa}</label><br>
  <div class="line"></div>
  `
  // <label class="description" for="input">${description}</label>
  document.querySelector('.todo-list').appendChild(item)
}

const limparTarefas = () => {
  const todoList = document.querySelector('.todo-list')
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild)
  }
}
const renderScreen = () => {
  limparTarefas()
  banco.forEach((item,indice) => createMyList(item.tarefa, item.status, indice))
}
const inserirItem = (event) => {
  let tecla = event.key
  let text = event.target.value
  if (tecla === 'Enter') {
    banco.push({
      'tarefa': text
    })
    renderScreen()
    event.target.value = ''
  }
}

const clickItem = (event) => {
  const element = event.target
  console.log(element)
}

document.addEventListener('click',clickItem)
document.querySelector('.input-form').addEventListener('keypress', inserirItem)

renderScreen()