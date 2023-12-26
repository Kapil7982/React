import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../redux/action';
import '../App.css';

function TodoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === parseInt(id))
  );

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
