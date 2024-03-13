import React from 'react'
import '@/Footer/index.css'
import storeTodo from '../../store/todosStore'
import { observer } from 'mobx-react'

function Footer() {
  // do NOT destructure methods from the store ==> it will result in 'this' being 'Undefined' in the methods
  const {todos} = storeTodo
  
  const completeSize = todos.reduce((prev, currt) => {
    return prev + (currt.complete ? 1 : 0)
  }, 0)

  return (
    <div className='todo-footer'>
      <label>
        <input
          type='checkbox'
          checked={completeSize === todos.length && todos.length !== 0}
          onChange={(e) => { storeTodo.chooseAllItems(e.target.checked)}} />
      </label>
      <span>
        <span>done{completeSize }</span> / All{todos.length}
      </span>
      <button className='btn btn-danger' onClick={()=> storeTodo.clearAllTodos()}>clear the todo done</button>
    </div>
  )
}

export default observer(Footer)