import "./App.scss";
import React from "react";
import { InputForm } from "./components/Form/InputForm";
import { Todos } from "./components/Todos/Todos";
import { todos, Itodo } from "./components/TodosArray";

export default function App() {
  const [todoState, setTodoState] = React.useState<Itodo[]>(todos);
  const updateTodo = (todo: Omit<Itodo, "id">) => {
    setTodoState([...todoState, { ...todo, id: Math.random() }]);
  };

  const deleteTodoHandler = (id: number) => {
    const newTodos = [...todoState].filter((todo) => {
      if (todo.id !== id) return todo;
    });
    setTodoState(newTodos);
    
  };

  return (
    <>
      <h1 className="text-teal-600 mb-3">TodoList</h1>
      <InputForm updateTodo={updateTodo} />
      <Todos todos={todoState} deleteTodo={deleteTodoHandler} />
    </>
  );
}
