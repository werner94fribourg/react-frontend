import { useEffect, useState } from 'react';
import classes from './TodoItem.module.css';

const TodoItem = props => {
  const id = props.id;
  const [isChecked, setIsChecked] = useState(props.checked);
  const deleteTaskHandler = event => {
    props.onDelete(id);
  };
  const statusHandler = event => {
    setIsChecked(prevState => !prevState);
  };
  useEffect(() => {
    props.onUpdate(id, isChecked);
  }, [isChecked]);
  return (
    <li
      className={`${classes['todo-list__item']}  ${
        isChecked ? classes['checked'] : ''
      }`}
      onClick={statusHandler}
    >
      {props.title}
      <span className={classes.close} onClick={deleteTaskHandler}>
        ×
      </span>
    </li>
  );
};

export default TodoItem;
