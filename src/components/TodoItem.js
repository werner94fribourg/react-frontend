import { useDispatch } from 'react-redux';
import { changeTaskStatus, deleteTask } from '../store/slices/todo-item';
import classes from './TodoItem.module.css';

const TodoItem = props => {
  const dispatch = useDispatch();
  const { id, title, isChecked } = props.task;
  const deleteTaskHandler = event => {
    event.stopPropagation();
    deleteTask(id, dispatch);
  };

  const statusHandler = () => {
    changeTaskStatus(id, dispatch);
  };

  return (
    <li
      className={`${classes['todo-list__item']}  ${
        isChecked ? classes['checked'] : ''
      }`}
      onClick={statusHandler}
    >
      {title}
      <span className={classes.close} onClick={deleteTaskHandler}>
        ×
      </span>
    </li>
  );
};

export default TodoItem;
