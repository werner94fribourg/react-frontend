import classes from './TodoList.module.css';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const tasks = useSelector(state => state.todoItem.items);

  return (
    <ul className={classes['todo-list']}>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
