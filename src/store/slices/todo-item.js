import { createSlice } from '@reduxjs/toolkit';
import { getBackendData } from '../../api/api';

const initialState = {
  items: [
    {
      id: 0,
      title: '',
      isChecked: false,
    },
  ],
};

const todoItemSlice = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    setItems(state, action) {
      const todoItems = action.payload;

      state.items = todoItems;
    },
    modifyItemStatus(state, action) {
      const idItem = action.payload;

      const itemIndex = state.items.findIndex(it => it.id === idItem);

      if (itemIndex >= 0)
        state.items[itemIndex].isChecked = !state.items[itemIndex].isChecked;
    },
    addItem(state, action) {
      const newItem = action.payload;

      state.items.push(newItem);
    },
    removeItem(state, action) {
      const idItem = action.payload;

      state.items = state.items.filter(it => it.id !== idItem);
    },
  },
});

const todoItemActions = todoItemSlice.actions;

export const getAllTasks = async dispatch => {
  const data = await getBackendData('', {
    mode: 'cors',
    headers: {
      accept: 'application/json',
    },
  });
  if (data.success) dispatch(todoItemActions.setItems(data.data));
};

export const addNewTask = async (taskName, dispatch) => {
  const sendData = {
    title: taskName,
    isChecked: false,
  };
  const data = await getBackendData('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(sendData),
  });

  if (data.success) dispatch(todoItemActions.addItem(data.data));
};

export const deleteTask = async (id, dispatch) => {
  const data = await getBackendData(`/${id}`, {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
    },
  });

  if (data.success) dispatch(todoItemActions.removeItem(data.data.id));
};

export const changeTaskStatus = async (id, dispatch) => {
  const data = await getBackendData(`/${id}/status`, {
    method: 'PUT',
    headers: {
      accept: 'application/json',
    },
  });

  if (data.success) dispatch(todoItemActions.modifyItemStatus(data.data.id));
};

const todoItemReducer = todoItemSlice.reducer;

export default todoItemReducer;
