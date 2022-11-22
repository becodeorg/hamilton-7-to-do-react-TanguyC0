import React, { useState } from "react";
import './sass/main.scss';
import ToDoAdd from './component/ToDoAdd';
import ItemTodo from './component/ItemTodo';

function App() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    console.log(childdata);
    setData(childdata);
  }

  // const todosList = [{text:"Learn React",state:false}, {text:"Learn Node",state:false}, {text:"Learn Express",state:false}, {text:"Learn MongoDB",state:false}];
  // const [todos, setTodo] = useState(todosList);

  return (
    <>
    <header className="hero">
      <h1 className="hero__title">My First React App</h1>
    </header>
    <main className="body">
      <ToDoAdd add={childToParent}/>
      <hr/>
      <ItemTodo data={data}/>

    </main>
    </>
  );
}

export default App;
