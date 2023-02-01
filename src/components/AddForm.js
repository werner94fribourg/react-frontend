import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/slices/todo-item';
import classes from './AddForm.module.css';

const AddForm = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const submitHandler = event => {
    event.preventDefault();
    const value = inputRef.current.value;
    inputRef.current.value = '';
    if (value === '') return;

    addNewTask(value, dispatch);
  };
  return (
    <form className={classes['header__form']} onSubmit={submitHandler}>
      <input
        className={classes['header__form-input']}
        type="text"
        placeholder="Title..."
        ref={inputRef}
      />
      <button className={classes['header__form-submit']} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddForm;
