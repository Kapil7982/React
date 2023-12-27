// src/redux/store.jsx

import { createStore, combineReducers } from 'redux';
import reducer from './reducers';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  todos: reducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
