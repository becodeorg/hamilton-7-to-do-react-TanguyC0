import React, { useRef } from "react";

function ToDoAdd({add})
{
    const inputRef = useRef();

    function clickHandler() {
        let inputElement = inputRef.current.value;
        if (inputElement !== '') {
            add(inputElement);
        }
      }

    return (
        <form className='form'>
            <input className='form__input' type="text" placeholder='place a new todo' ref={inputRef}/>
            <input type="submit" value="►" className="form__button" onClick={clickHandler}/>
        </form>
    );
}

export default ToDoAdd;