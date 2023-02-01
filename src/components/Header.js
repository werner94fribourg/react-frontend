import classes from './Header.module.css';
import AddForm from './AddForm';

const Header = () => {
  return (
    <div className={classes.header}>
      <AddForm />
    </div>
  );
};

export default Header;
