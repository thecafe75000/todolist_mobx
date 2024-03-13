import React, { useState } from 'react'
import '@/Header/index.css'
import storeTodo from '../../store/todosStore'

function Header() {

  const [title, setTitle] = useState('')
  
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (title.trim() === '') {
        setTitle('')
        alert('You must put some words here')
        return
      }

      // call the function to add a 'todo'
      storeTodo.addTodo(title)

      // clear the inputbox
      setTitle('')
    }
    
  }

  return (
    <div className='todo-header'>
      <input
        type='text'
        placeholder='please input the name of your todo here and press the Enter key'
        onKeyUp={handleEnter}
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
    </div>
  )
}

export default Header