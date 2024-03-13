import React from 'react'
import '@/List/index.css'
import Item from '@/Item'
import storeTodo from '../../store/todosStore'
import { observer } from 'mobx-react'

function List() {
  return (
    <ul className='todo-main'>
      {
        storeTodo.todos.map(todo => <Item key={todo.id} todo={todo} />)
      }
    </ul>
  )
}

export default observer(List)