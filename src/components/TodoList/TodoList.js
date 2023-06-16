
const TodoList = ( todos ) =>
{
    return ( 
        <div className="todo-list">
            { todos.todos.map( ( todo ) =>
            {
                return (
                    <div className="todo" key={todo.id}>
                        <div className="header">
                            <div>{ todo.title }</div>
                            <div className="actions">
                                <button>delete</button>
                                <button>edite</button>
                            </div>
                        </div>
                        <hr />
                        <div className="description">{todo.description }</div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default TodoList;