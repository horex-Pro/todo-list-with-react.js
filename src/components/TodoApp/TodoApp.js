import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from './TodoApp.module.css'

const TodoApp = () =>
{
    
    const [ todos, setTodos ] = useState( [ ] );

    const addTodo = ( newTodo ) =>
    {
        setTodos( [ ...todos, newTodo ] );
    };

    return (
        <div className={styles.wrapper}>
            <h1>Todo List App</h1>
            
            <div className={ styles.container } >
                <div className={styles.row}>
                    <h2>uncompleted task</h2>
                    <select>
                        <option value='all'>All</option>
                    </select>
                </div>
                <TodoForm addTodo={ addTodo } />
                <TodoList todos={ todos } />
            </div>
        </div>
    
    );
}
 
export default TodoApp;