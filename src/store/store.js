import { configureStore } from '@reduxjs/toolkit';
import todoItemReducer from './slices/todo-item';

const store = configureStore({
  reducer: { todoItem: todoItemReducer },
});

export default store;
