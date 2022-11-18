function ToDoAdd()
{
    return (
        <form className='new-todo'>
            <input className='new-todo__input' type="text" placeholder='place a new todo'/>
            <input type="submit" value="►" className="new-todo__button-arrow"/>
        </form>
    );
}

export default ToDoAdd;