import { headers } from "next/headers";

const axios = require('axios');

export const getTodos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/todos');
    return response;
  }
  catch (err) {
    console.error(err);
  }
};

export const createTodos = async (title: string) => {
  try {
    const response = await axios.post('http://localhost:3000/todos', {
      todo: {
        title: title,
        completed: false,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateTodos = async (editTitle: string, id: string) => {
  try {
    const response = await axios.put(`http://localhost:3000/todos/${id}`, {
      todo: {
        title: editTitle,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  catch (err) {
    console.error(err);
  }
}

export const deleteTodos = async (id: string) => {
  try {
    await axios.delete(`http://localhost:3000/todos/${id}`);
  }
  catch (err) {
    console.error(err);
  }
}
