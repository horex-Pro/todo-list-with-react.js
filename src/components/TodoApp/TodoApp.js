import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoApp.module.css";
import UncompletedCount from "../UncompletedCounter/UncompletedCounter";
import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const updatedTodos = changeHandler(status);
    setFilteredTodos(updatedTodos);
  }, [todos, status]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onCompletedHandler = (id) => {
    const clonedTodos = [...todos];
    const completedItem = clonedTodos.findIndex((item) => item.id === id);
    clonedTodos[completedItem].isCompleted =
      !clonedTodos[completedItem].isCompleted;
    setTodos([...clonedTodos]);
  };

  const removeHandler = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos([...updatedTodos]);
  };

  const changeHandler = (newStatus) => {
    setStatus(newStatus);
    switch (status.value) {
      case "Completed":
        return todos.filter((i) => i.isCompleted);
      case "Uncompleted":
        return todos.filter((i) => !i.isCompleted);
      case "all":
      default:
        return todos;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Todo List App</h1>
      <div className={styles.container}>
        <div className={styles.row}>
          <UncompletedCount todos={todos} />
          {!todos.length ? (
            <h2>Set Your Daily Todos</h2>
          ) : (
            <h2>Uncompleted Task</h2>
          )}
          <Select
            defaultValue={status}
            onChange={setStatus}
            options={options}
            className={styles.select}
          />
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          onComplete={onCompletedHandler}
          onRemove={removeHandler}
        />
      </div>
    </div>
  );
};

export default TodoApp;
