import { getTodos } from "@/utils/todo-operations";

export const TodoList = () => {

  const todos = getTodos();

  console.dir(todos);

  return (
    <h1>TodoList</h1>
  )

};