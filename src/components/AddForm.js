import classes from './AddForm.module.css';

const AddForm = props => {
  const submitHandler = event => {
    event.preventDefault();
    const value = event.target.querySelector(
      `.${classes['header__form-input']}`
    ).value;
    if (value === '') return;
    props.onAdd(value);
  };
  return (
    <form className={classes['header__form']} onSubmit={submitHandler}>
      <input
        className={classes['header__form-input']}
        type="text"
        placeholder="Title..."
      />
      <button className={classes['header__form-submit']} type="submit">
        Add
      </button>
    </form>
  );
};

export default AddForm;
