//const { createStore } = require('redux');

// Check if Redux is loaded
if (typeof Redux === 'undefined' || !Redux.createStore) {
    console.error('Redux library not found. Make sure it is included before your app.js script.');
  } else {
    const createStore = Redux.createStore;

// Define Redux actions and reducer
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const initialState = { todos: [] };

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: !todo.status }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(todoReducer);

// DOM elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Helper function to render todos
function renderTodos() {
  const state = store.getState();
  todoList.innerHTML = '';
  state.todos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${todo.title}</span>
      <button class="toggleBtn">Toggle</button>
      <button class="deleteBtn">Delete</button>
    `;
    listItem.querySelector('.toggleBtn').addEventListener('click', () => {
      store.dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } });
    });
    listItem.querySelector('.deleteBtn').addEventListener('click', () => {
      store.dispatch({ type: DELETE_TODO, payload: { id: todo.id } });
    });
    if (todo.status) {
      listItem.classList.add('completed');
    }
    todoList.appendChild(listItem);
  });
}

// Subscribe to Redux store changes and initial rendering
store.subscribe(renderTodos);
renderTodos();

// Event listener for adding a new todo
addTodoBtn.addEventListener('click', () => {
  const newTodo = {
    id: Date.now(),
    title: todoInput.value,
    status: false,
  };
  store.dispatch({ type: ADD_TODO, payload: newTodo });
  todoInput.value = '';
});
  }