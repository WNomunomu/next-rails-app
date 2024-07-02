import { useCallback, useState } from "react";

import { createTodos } from "@/utils/todo-operations";

export const TodoCreateForm = () => {

  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmitTodoCreateForm = async () => {
    await createTodos(todoTitle);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  }, []);

  return (
    <>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        placeholder="Enter todo title"
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmitTodoCreateForm}
      >
        Create
      </button>
    </>
  );

};