import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [ input, setInput ] = useState('');

  return (
    <>
    <form action="">
        {todos.map((todo) => (
            <div key={Math.random()}>{todo}</div>
        ))}
        <input type="text"  onChange={(e) => setInput(e.target.value)} placeholder='Enter todo' required value={input} />
        <button type="submit" onClick={(e) => {e.preventDefault(); setTodos([...todos, input]), setInput('')}} >Add</button>
    </form>
    </>
  )
}

export default Todo