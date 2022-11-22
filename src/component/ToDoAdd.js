import React, { useRef } from "react";

function ToDoAdd({add})
{
    const inputRef = useRef();

    function clickHandler() {
        const inputElement = inputRef.current;

        add(inputElement.value);
        inputElement.value = '';
      }

    return (
        <div className='new-todo'>
            <input className='new-todo__input' type="text" placeholder='place a new todo' ref={inputRef}/>
            <input type="submit" value="►" className="new-todo__button-arrow" onClick={clickHandler}/>
        </div>
    );
}

export default ToDoAdd;