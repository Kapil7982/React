import React from 'react';
import { TodoItem } from './TodoItem';
import './Todo.css';

function TodoList({ todosList, handleStatus }) {
  return (
    <div className="todo-list-container">
      {todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleStatus={handleStatus} />
      ))}
    </div>
  );
}

export { TodoList };
