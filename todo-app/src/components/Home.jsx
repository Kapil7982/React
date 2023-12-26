import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setTodos } from '../redux/action';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    // Fetch todos from the server when the component mounts
    fetch('http://localhost:5000/todos')
      .then((response) => response.json())
      .then((data) => dispatch(setTodos(data)));
  }, [dispatch]);

  const handleAddTodo = () => {

    if (!todoText.trim()) {
        alert('Please enter a title for the todo.');
        return;
      }
    // Post new todo to the server
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: todoText, completed: false }),
    })
    .then((response) => response.json())
    .then((data) => dispatch(addTodo(data)))
    .catch((error) => {
      console.error('Error adding todo:', error);
      alert('Error adding todo. Please try again.');
    });


    setTodoText('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
        required
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
