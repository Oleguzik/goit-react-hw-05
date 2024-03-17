import css from "./Form.module.css";

function Form({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.input.value.trim();

    if (!value) {
      alert("Please enter valid search query!");
      return;
    }

    onSubmit(value);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input className={css.input} type="text" name="input" required />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}

export default Form;
