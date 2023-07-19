import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from './TodoApp.module.css'
import UncompletedCount from "../UncompletedCounter/UncompletedCounter";

const TodoApp = () => {
    
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const updatedTodos = changeHandler('all');
        setFilteredTodos(updatedTodos);
    }, [todos]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const onCompletedHandler = (id) => {
        const clonedTodos = [...todos];
        const completedItem = clonedTodos.findIndex((item) => item.id === id);
        clonedTodos[completedItem].isCompleted = !clonedTodos[completedItem].isCompleted;
        setTodos([...clonedTodos]);
    }

    const removeHandler = (id) => {
        const updatedTodos = todos.filter((item) => item.id !== id);
        setTodos([...updatedTodos]);
    }

    const changeHandler = (status) => {
        switch (status) {
            case 'Completed':
                return todos.filter(i => i.isCompleted);
            case 'Uncompleted':
                return todos.filter(i => !i.isCompleted);
            case 'all':
            default:
                return todos;
        }
    }

    return (
        <div className={styles.wrapper}>
            <h1>Todo List App</h1>
            <div className={styles.container}>
                <div className={styles.row}>
                    <UncompletedCount todos={todos} />
                    {!todos.length ? <h2>Set Your Daily Todos</h2> : <h2>Uncompleted Task</h2>}
                    <select onChange={(event) => setFilteredTodos(changeHandler(event.target.value))}>
                        <option value='all'>All</option>
                        <option value='Completed'>Completed</option>
                        <option value='Uncompleted'>Uncompleted</option>
                    </select>
                </div>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={filteredTodos} onComplete={onCompletedHandler} onRemove={removeHandler} />
            </div>
        </div>
    );
}

export default TodoApp;