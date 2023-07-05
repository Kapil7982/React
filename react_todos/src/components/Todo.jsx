import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: inputText,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText('');
    }
  };

  const handleToggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleShowCompletedTodos = () => {
    setShowCompleted(true);
  };

  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="+ Add a to-do..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>+</button>
      </div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <span onClick={() => handleToggleCompletion(todo.id)}>
            {todo.completed ? '☑' : '☐'} {todo.text}
          </span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          <span
            className="star"
            onClick={() => handleToggleCompletion(todo.id)}
          >
            {todo.completed ? '☆' : '★'}
          </span>
        </div>
      ))}
      <button onClick={handleShowCompletedTodos}>
        Show Completed To-Dos
      </button>
      {showCompleted && (
        <div>
          <h3>Completed To-Dos:</h3>
          {completedTodos.map((todo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <span onClick={() => handleToggleCompletion(todo.id)}>
                {todo.completed ? '☑' : '☐'} {todo.text}
              </span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <span
                className="star"
                onClick={() => handleToggleCompletion(todo.id)}
              >
                {todo.completed ? '☆' : '★'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
