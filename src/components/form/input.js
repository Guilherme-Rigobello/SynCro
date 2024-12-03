import styles from './input.module.css';

function input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        autoComplete='off'
      ></input>
    </div>
  );
}

export default input;
