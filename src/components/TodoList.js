import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo';

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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      // if letter is not typed it will not render
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ?newValue : item))
    );
  };

  // this removes todo
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete; // toggle between true and false
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To Do List for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
