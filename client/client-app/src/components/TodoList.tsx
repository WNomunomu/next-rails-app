import { AxiosResponse } from 'axios';
import { useEffect,useState } from 'react';

import { getTodos } from "@/utils/todo-operations";

type Todo = {
  id: string,
  title: string,
  completed: boolean,
}

export const TodoList = () => {

  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   (async() => {
  //     const response = await getTodos();
  //     setTodos(response);
  //     console.dir(response);
  //   })
  // }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  console.dir(todos);

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos?.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  )

};