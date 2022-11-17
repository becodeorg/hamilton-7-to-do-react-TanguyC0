function ToDoAdd()
{
    return (
        <form className='new-todo'>
            <input type="text" placeholder='place a new todo'/>
            <button type="submit">add todo</button>
        </form>
    );
}

export default ToDoAdd;