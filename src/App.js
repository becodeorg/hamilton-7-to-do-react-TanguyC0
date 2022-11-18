import './sass/_main.scss';
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
      <section className='todo'>
        <h2>Todo List</h2>
        <div className="todo__list">
          <ItemTodo />
          <ItemTodo />
        </div>
      </section>
    </main>
  );
}

export default App;
