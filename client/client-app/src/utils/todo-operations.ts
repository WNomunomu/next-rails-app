import axios from 'axios';

export const getTodos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/todos');
    return response;
  }
  catch (err) {
    console.error(err);
  }
  // const response = await fetch('http://localhost:3000/todos');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  // return response.json();
};

export const createTodos = async (title: string) => {
  try {
    await axios.post('http://localhost:3000/todos', {
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
    await axios.put(`http://localhost:3000/todos/${id}`, {
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
