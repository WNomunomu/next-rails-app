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
    <form onSubmit={handleSubmitTodoCreateForm}>
      <label htmlFor="text" className="form-label">Todo title</label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        placeholder="Enter todo title"
      />
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );

};