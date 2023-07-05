

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      {todo.completed ? <span>✔</span> : null}
      <button onClick={removeTodo}>Remove</button>
    </div>
  );
}

export default TodoItem;
