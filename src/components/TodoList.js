import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      // if letter is not typed it will not render
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todo,...todos);
  };

  return (
    <div>
      <h1>To Do List for Today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
