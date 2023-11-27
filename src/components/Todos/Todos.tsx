import { FC } from "react";
import { Itodo } from "../TodosArray";
import { AnimatePresence, motion } from "framer-motion";

interface TodosProps {
  todos: Itodo[];
  deleteTodo: (id: number) => void;
}
export const Todos: FC<TodosProps> = ({ todos, deleteTodo }) => {
  return (
    <div>
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.a
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            key={todo.id+ 1}
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
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
