import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () =>
{
    
    const [ todos, setTodos ] = useState( [ ] );

    const addTodo = ( newTodo ) =>
    {
        setTodos( [ ...todos, newTodo ] );
    };

    return (
        <div className="container">
            <TodoForm addTodo={ addTodo } />
            <TodoList todos={ todos } />
        </div>
    );
}
 
export default TodoApp;