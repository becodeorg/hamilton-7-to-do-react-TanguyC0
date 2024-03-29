// import React, { useEffect, useState } from "react";

function ItemTodo ({todos, setTodo}) {

    const handleTodo = (id) => {
        let newTodos = [...todos];
        newTodos[id].state = !newTodos[id].state;
        setTodo(newTodos);
    }

    const handleDelete = (id) => {
        let newTodos = [...todos];
        newTodos.splice(id, 1);
        setTodo(newTodos);
    }

    return (
        <section className="list">
            <h2 className="list__title">Todo List</h2>
            <ul className="list__items">
            {todos.map((todo,index) => (
            <li className="list__items__item" key={index}>
                <input 
                    type="checkbox" 
                    value="todo1" 
                    className="list__items__item__checkbox"
                    defaultChecked={todo.state} 
                    onChange={() => handleTodo(index)}
                />
                <p className="list__items__item__text">{todo.text}</p>
                <input type="button" value="🗑️" className="list__items__item__button" onClick={() => handleDelete(index)}/>
            </li>
            ))}
            </ul>
        </section>
    )
}
    
export default ItemTodo;