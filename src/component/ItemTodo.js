import React, { useEffect, useState } from "react";

function ItemTodo ({data}) {

    // const todosList = [{text:"Learn React",state:false}, {text:"Learn Node",state:false}, {text:"Learn Express",state:false}, {text:"Learn MongoDB",state:false}];
    const [todos, setTodo] = useState([]);

    const handleTodo = (id) => {
        let newTodos = [...todos];
        newTodos[id].state = !newTodos[id].state;
        setTodo(newTodos);
    }

    useEffect(() => {
        let newTodos = localStorage.getItem('todos');
        if(newTodos === null)
        {
            newTodos = [];
        }
        else
        {
            newTodos = JSON.parse(newTodos);
        }
            // let newTodos = [...todos];
            // newTodos.push({text:data,state:false});
        setTodo(newTodos);
    }, [data]);

    return (
        <div className="todo__list">
            {todos.map((todo,index) => (
            <label className="todo__list__item" key={index}>
                <input 
                    type="checkbox" 
                    value="todo1" 
                    className="todo__list__item__checkbox"
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