import React from "react";
import "./App.css";
// import TodoList from "./components/TodoList";
import { TodoList } from "./components";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
