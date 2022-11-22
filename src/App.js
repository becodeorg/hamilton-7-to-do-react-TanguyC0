import React, { useState } from "react";
import './sass/_main.scss';
import ToDoAdd from './component/ToDoAdd';
import ItemTodo from './component/ItemTodo';

function App() {
  // const [data, setData] = useState('');
  
  // const childToParent = (childdata) => {
  //   console.log(childdata);
  //   setData(childdata);
  // }

  const todosList = [{text:"Learn React",state:false}, {text:"Learn Node",state:false}, {text:"Learn Express",state:false}, {text:"Learn MongoDB",state:false}];
  const [todos, setTodo] = useState(todosList);

  return (
    <main className="App">
      <section>
        <h1>My First React App</h1>
          <ToDoAdd add={setTodo}/>
      </section>
      <hr/>
      <section className='todo'>
        <h2>Todo List</h2>
          <ItemTodo lst={todos} fct={setTodo}/>
      </section>
    </main>
  );
}

export default App;
