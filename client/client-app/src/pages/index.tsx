import { TodoCreateForm } from "@/components/TodoCreateButton";
import { TodoList } from "@/components/TodoList";

export default function Home() {

  return (
    <>
      <h1>Todos</h1>
      <TodoList />
      <TodoCreateForm />
    </>
  );

}