import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { getAllTasks } from './store/slices/todo-item';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTasks(dispatch);
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
