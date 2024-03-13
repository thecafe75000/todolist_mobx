import React from 'react'
import '@/Item/index.css'
import storeTodo from '../../store/todosStore'
import { observer } from 'mobx-react'

function Item({todo}) {

  const clickHandle = () => {
    if (todo.complete === true) {
       storeTodo.deleteTodo(todo.id)
    } else {
       alert('todo must be fished before deleting it')
    }
   
  }
  
  
  return (
    <li>
      <label>
        <input type='checkbox' checked={todo.complete} onChange = {()=> storeTodo.ctoggleTodo(todo.id)} />
        <span className={todo.complete?'done':''}>{todo.title }</span>
      </label>
      {/* <button className='btn btn-danger' onClick={clickHandle}>detele</button> */}
      <button className='btn btn-danger' onClick={()=>clickHandle()}>delete</button>
    </li>
  )
}

export default observer(Item)