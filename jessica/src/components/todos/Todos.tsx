import { useState } from "react";
import { Card } from "./card";
import "./App.css";

/**
 * 1. Form Component to add a new todo, to todos list
 *    - add todo logic
 *    - remove todo logic
 *    - mark as complete
 * 2. DisplayTodos Component
 * 3. Individual Todo Cards
 */

type TaskType = {
  name: string;
  isComplete: boolean;
};

// https://pokeapi.co/api/v2/

function Todos() {
  const [todos, setTodos] = useState<TaskType[]>([]);
  const [input, setInput] = useState<string>("");

  function removeTodo(name: string): void {
    const updatedTodos = todos.filter((todo) => todo.name !== name);
    setTodos(updatedTodos);
  }

  function toggleComplete(name: string, isComplete: boolean): void {
    const updatedTodos = todos.map((todo) => {
      if (todo.name === name) {
        return { ...todo, isComplete: !isComplete };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  return (
    <>
      <label>Add Task</label>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add Task"
      />

      <button
        type="submit"
        onClick={() => setTodos([...todos, { name: input, isComplete: false }])}
      >
        Submit
      </button>

      {todos.map((todo) => (
        <Card
          name={todo.name}
          isComplete={todo.isComplete}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </>
  );
}

export default Todos;
