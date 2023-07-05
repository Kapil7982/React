import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { nanoid } from 'nanoid';
import { TodoList } from './TodoList';
import './Todo.css';

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const addTodo = (title) => {
    const todo = {
      id: nanoid(5),
      title: title,
      status: false,
    };
    setTodosList([...todosList, todo]);
  };

  const handleStatus = (id) => {
    setTodosList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <TodoInput addTodo={addTodo} />
      <TodoList todosList={todosList} handleStatus={handleStatus} />
    </div>
  );
}

export { Todo };
