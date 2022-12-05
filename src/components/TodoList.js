import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = props => {
  return (
    <ul className={classes['todo-list']}>
      {props.tasks.map(task => (
        <TodoItem
          key={task.id}
          id={task.id}
          title={task.name}
          checked={task.isComplete}
          onUpdate={props.onUpdate}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
