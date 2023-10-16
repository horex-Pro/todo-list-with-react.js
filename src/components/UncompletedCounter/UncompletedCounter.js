import styles from "./UncompletedCounter.module.css";

const UncompletedCount = ({ todos }) => {
  const uncompletedTodos = todos.filter((i) => !i.isCompleted);
  if (!uncompletedTodos.length) return null;
  return <div className={styles.counter}>{uncompletedTodos.length}</div>;
};

export default UncompletedCount;
