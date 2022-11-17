import './css/style.css';
import ToDoAdd from './component/ToDoAdd';
import ItemTodo from './component/ItemTodo';

function App() {
  return (
    <main className="App">
      <section>
        <h1>My First React App</h1>
          <ToDoAdd />
      </section>
      <hr/>
      <section>
        <h2>Todo List</h2>
        <ItemTodo />
        <ItemTodo />
      </section>
    </main>
  );
}

export default App;
