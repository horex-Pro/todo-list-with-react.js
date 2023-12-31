import styles from "./TodoList.module.css";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, onComplete, onRemove }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => {
        return (
          <div
            className={todo.isCompleted ? styles.completed : styles.todo}
            key={todo.id}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{todo.title}</h2>
              <div className={styles.actions}>
                <button onClick={() => onComplete(todo.id)}>
                  <FaCheck />
                </button>
                <button onClick={() => onRemove(todo.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
            <hr />
            <p className={styles.description}>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
