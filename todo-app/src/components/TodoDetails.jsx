import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../redux/action';

function TodoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos ?? []);
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
    //return <div>Please login to view todo details.</div>;
  }

  const todo = todos.find((todo) => todo.id === parseInt(id, 10));
  if (!todo) {
    return <div>Todo not found</div>;
  }

  const handleToggleComplete = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <h1>Todo Details</h1>
      <div>
        <strong>Title: </strong> {todo.title}
      </div>
      <div>
        <strong>Status: </strong>{' '}
        {todo.completed ? 'Completed' : 'Not Completed'}
      </div>
      <button onClick={handleToggleComplete}>Toggle Complete Status</button>
      <button onClick={handleRemoveTodo}>Remove Todo</button>
    </div>
  );
}

export default TodoDetails;
