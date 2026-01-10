import React, { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: 'Todo msg', completed: false }
  ])

  const addTodo = (todo) => {
    const id = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1
    setTodos(prev => [...prev, { id, ...todo }])
  }

  const updateTodo = (id, updated) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, ...updated } : t)))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const value = { todos, addTodo, updateTodo, deleteTodo, toggleComplete }

  return (
    <TodoProvider value={value}>
      <div className="app max-w-xl mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <TodoForm />
        <div className="mt-4 space-y-2">
          {todos.map(t => (
            <TodoItem key={t.id} todo={t} />
          ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App