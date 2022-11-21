import React, { useState } from "react";

function ItemTodo () {
    const todosList = [{text:"Learn React",state:false}, {text:"Learn Node",state:false}, {text:"Learn Express",state:false}, {text:"Learn MongoDB",state:false}];
    const [todos, setTodo] = useState(todosList);

    const handleTodo = (id) => {
        const newTodos = [...todos];
        newTodos[id].state = !newTodos[id].state;
        setTodo(newTodos);
    }

    return (
        <div className="todo__list">
            {todos.map((todo,index) => (
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