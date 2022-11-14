import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import {todo, todoList} from './todos.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header name="Edgar" />
        
      </header>
      <div>
          {JSON.stringify(todoList, null, 2)}
        </div>
    </div>
  );
}

export default App;

