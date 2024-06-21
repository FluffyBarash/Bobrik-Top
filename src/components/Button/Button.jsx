import classes from "../Button/Button.module.css";

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.button_active}` : classes.button
      }
    >
      {children}
    </button>
  );
}
