import React, { useEffect, useState } from "react";
import './sass/main.scss';
import ToDoAdd from './component/ToDoAdd';
import ItemTodo from './component/ItemTodo';

const LSKEY = "MyTodoApp";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, {text:todo, state: false }]);
  }

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    if (tmp) {
     setTodos(tmp);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
    <header className="hero">
      <h1 className="hero__title">My First React App</h1>
    </header>
    <main className="body">
      <ToDoAdd add={addTodo}/>
      <hr/>
      <ItemTodo todos={todos} setTodo={setTodos}/>

    </main>
    </>
  );
}

export default App;
