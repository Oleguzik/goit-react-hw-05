import css from "./Error.module.css";

function Error({ message }) {
  return (
    <p className={css.info}>
      Something went wrong! <br />
      Message: {message}. <br />
      Please, try again later!
    </p>
  );
}

export default Error;
