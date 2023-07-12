import styles from './TodoList.module.css';
import { FaTrash } from 'react-icons/fa';
import { HiPencil } from "react-icons/hi";

const TodoList = ( todos ) =>
{
    return ( 
        <div className={styles.todoList}>
            { todos.todos.map( ( todo ) =>
            {
                return (
                    <div className={styles.todo} key={todo.id}>
                        <div className={styles.header}>
                            <h2 className={styles.title}>{ todo.title }</h2>
                            <div className={styles.actions}>
                                <button><HiPencil/></button>
                                <button><FaTrash/></button>
                            </div>
                        </div>
                        <hr />
                        <p className={styles.description}>{todo.description}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default TodoList;