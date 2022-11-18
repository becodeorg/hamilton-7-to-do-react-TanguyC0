function ItemTodo () {
    return (
        <label 
        className="todo__list__item">
            <input type="checkbox" id="todo1" name="todo1" value="todo1"/>
            <p className="todo__list__item__text">test todo 1</p>
        </label>
    )
}

export default ItemTodo;