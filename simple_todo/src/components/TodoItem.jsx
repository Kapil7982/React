import React from 'react';
import './Todo.css';

function TodoItem({ todo, handleStatus }) {
  return (
    <div className={`todo-item ${todo.status ? 'done' : ''}`}>
      <span>{todo.title}</span>
      <button onClick={() => handleStatus(todo.id)}>
        {todo.status ? 'Undo' : 'Done'}
      </button>
    </div>
  );
}

export { TodoItem };
