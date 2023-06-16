import {  useState } from "react";

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

        
        // const newTodo = {
        //     title: e.target.title.value,
        //     description: e.target.description.value,
        //     id: Math.floor( Math.random() * 1000 ),
        //     isCompleted: false,
        // };

        // setTodo( { todo } );
        
        
        e.preventDefault()
        props.addTodo( todo )
        
        setTodo({})
    }

    // useEffect( () =>
    //     {
    //         props.addTodo(todo)
    // }, [ todo ] )

    return ( 
        <form onSubmit={submiteHandler}>
            <input type="text" placeholder="Add a new title..." name="title" value={todo.title} onChange={changeHandler}/>
            <textarea placeholder="enter your discritopn" name="description" value={todo.describtion} onChange={changeHandler} />
            <input type="submit" value="Add"/>
        </form>
     );
}
 
export default TodoForm