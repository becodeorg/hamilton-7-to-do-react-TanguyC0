import React, { useState } from "react";

function ItemTodo ({lst, fct}) {
    
    const handleTodo = (id) => {
        let newTodos = [...lst];
        newTodos[id].state = !newTodos[id].state;
        fct(newTodos);
    }

    return (
        <div className="todo__list">
            {lst.map((todo,index) => (
            <label className="todo__list__item" key={index}>
                <input 
                    type="checkbox" 
                    value="todo1" 
                    defaultChecked={todo.state} 
                    onChange={() => handleTodo(index)}
                />
                <p className="todo__list__item__text">{todo.text}</p>
            </label>
            ))}
        </div>
    )
}
    
export default ItemTodo;