import React, { useState } from 'react';
import { Async } from 'react-async';
import { BACKEND_URL } from './helpers/config';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

const getAllTasks = async () => {
  const response = await fetch(BACKEND_URL, {
    mode: 'cors',
  });
  const tasks = await response.json();
  return tasks;
};

const addTask = async title => {
  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({ name: title, isComplete: false }),
  });
  const newTask = await response.json();
  return newTask;
};

const deleteTask = async id => {
  const response = await fetch(`${BACKEND_URL}/${id}`, {
    method: 'DELETE',
    mode: 'cors',
  });
  return response.ok;
};

const updateTask = async (id, task) => {
  const response = await fetch(`${BACKEND_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(task),
  });
  return response.ok;
};

function App() {
  const [tasks, setTasks] = useState([]);
  const loadTasks = async () => {
    const tasksData = await getAllTasks();
    setTasks(tasksData);
    return tasksData;
  };

  const addHandler = title => {
    addTask(title).then(task => {
      setTasks(prevState => [...prevState, task]);
    });
  };

  const deleteHandler = id => {
    deleteTask(id).then(ok => {
      if (ok) setTasks(prevState => prevState.filter(task => task.id !== id));
    });
  };

  const updateHandler = (id, status) => {
    const taskToUpdate = tasks.find(task => task.id === id);
    if (status === !taskToUpdate.isComplete) {
      updateTask(id, {
        ...taskToUpdate,
        isComplete: status,
      }).then(ok => {
        if (ok) taskToUpdate.isComplete = status;
      });
    }
  };

  return (
    <Async promiseFn={loadTasks}>
      {({ data, error, isLoading }) => {
        if (data) {
          return (
            <React.Fragment>
              <Header onAdd={addHandler} />
              <TodoList
                tasks={data}
                onUpdate={updateHandler}
                onDelete={deleteHandler}
              />
            </React.Fragment>
          );
        }
      }}
    </Async>
  );
}

export default App;
