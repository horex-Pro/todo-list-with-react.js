import { useState } from "react";
import styles from './TodoForm.module.css'

const TodoForm = ( props ) =>
{
    
    let [ todo, setTodo ] = useState({});

    const changeHandler = ( e ) =>
    {
        // console.log( e.target.value )     
    }

    const submiteHandler = (e) =>
    {

        if ( !todo )
        {
            alert( 'complete the fields' );
            return
        }
        setTodo(
            todo = {
                title: e.target.title.value,
                description: e.target.description.value,
                id: Math.floor( Math.random() * 1000 ),
                isCompleted: false
            }
        
        )
            
        e.preventDefault()
        props.addTodo( todo )
        
        setTodo({})
    }

    return (
        <form onSubmit={ submiteHandler }>
            <div className={styles.inputs}>
                <input type="text" placeholder="Add a new title..." name="title" className={ styles.title } value={ todo.title } onChange={ changeHandler } />
                <textarea placeholder="Enter your description" name="description" className={ styles.description } value={ todo.describtion } onChange={ changeHandler } />
            </div>
            <input type="Submit" className={styles.submitBtn} value="Add"/>
        </form>
    );
}
 
export default TodoForm