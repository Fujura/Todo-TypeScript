import { FC, useState } from "react";
import { Itodo } from "../TodosArray";
import { AnimatePresence, motion } from "framer-motion";
import "./Todos.scss";

interface TodosProps {
  todos: Itodo[];
  deleteTodo: (id: number) => void;
}

export const Todos: FC<TodosProps> = ({ todos, deleteTodo }) => {
  const [completedTodos, setCompletedTodos] = useState<number[]>([]);

  const toggleCompleted = (id: number) => {
    // Check if the todo is already in the completedTodos array
    if (completedTodos.includes(id)) {
      setCompletedTodos(completedTodos.filter(todoId => todoId !== id));
    } else {
      setCompletedTodos([...completedTodos, id]);
    }
  };
  

  return (
    <div>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.a
            onClick={() => toggleCompleted(todo.id)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            key={todo.id}
            href="#"
            className={`todo block mb-2 max-w-sm p-6  border  rounded-lg shadow ${
              completedTodos.includes(todo.id) ? 'completed' : ''
            }`}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {todo.title}
            </h5>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  );
};
