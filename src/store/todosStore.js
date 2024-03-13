import { makeAutoObservable, autorun } from 'mobx'

class TodosStore {
  todos = JSON.parse(localStorage.getItem('todoKey')) || []

  constructor() {
    makeAutoObservable(this)

    autorun(() => {
      localStorage.setItem('todoKey', JSON.stringify(this.todos))
    })
  }

  // add 'todo'
  addTodo(title) {
    const todo = {
      id: Date.now(),
      title,
      complete: false
    }

    this.todos.unshift(todo)
  }

  // delete 'todo'
  deleteTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id)
    this.todos.splice(index, 1)
  }

  
  ctoggleTodo(id) {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
    })
  }

  //? delete all 'todo'
  clearAllTodos() {
    const newTodos = this.todos.filter((todo) => !todo.complete)
    this.todos = newTodos
  }

  //? for footer component
  chooseAllItems(isCheck) {
    this.todos.forEach((todo) => {
      todo.complete = isCheck
    })
  }
}

const storeTodo = new TodosStore()

export default storeTodo
