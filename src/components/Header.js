import classes from './Header.module.css';
import AddForm from './AddForm';

const Header = props => {
  return (
    <div className={classes.header}>
      <h2 className={classes['header__title']}></h2>
      <AddForm onAdd={props.onAdd} />
    </div>
  );
};

export default Header;
