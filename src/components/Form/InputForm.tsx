import React, { FC } from "react";
import { Itodo } from "../TodosArray";

interface InputFormProps {
  updateTodo: (todo: Omit<Itodo, 'id'>)=> void;
}

export const InputForm: FC<InputFormProps> = ({ updateTodo }) => {
  const [value, setValue] = React.useState<string>("");

  const onFormSubmitHandler = (e: any) => {
    e.preventDefault();
    updateTodo({
      title: value,
      isCompleted: false,
    });
    
    setValue("");
    
  };

  return (
    <form onSubmit={onFormSubmitHandler} className="mb-20">
      <label className="float-left ml-1">Add Todo</label>
      <input
        type="text"
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
      <button className="mt-4 float-left">Добавить</button>
    </form>
  );
};
