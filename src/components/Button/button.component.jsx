import styles from './button.module.scss';

export const Button = ({ children, onClickHandler, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClickHandler}
      className={styles.button}
    >
      {children}
    </button>
  );
};
