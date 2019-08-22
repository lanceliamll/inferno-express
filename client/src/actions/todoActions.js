import axios from "axios";

import { ADD_TODO_ERROR, GET_TODOS, GET_TODO_ERROR, GET_TODO } from "./types";

export const addTodo = todoData => async dispatchEvent => {
  try {
    await axios.post("http://localhost:5000/api/todos/", todoData);
  } catch (error) {
    dispatchEvent({
      type: ADD_TODO_ERROR
    });
  }
};

export const getTodo = id => async dispatchEvent => {
  try {
    const res = await axios.get(`http://localhost:5000/api/todos/${id}`);

    dispatchEvent({
      type: GET_TODO,
      payload: res.data
    });
  } catch (error) {
    dispatchEvent({
      type: GET_TODO_ERROR
    });
  }
};

export const getTodos = () => async dispatchEvent => {
  try {
    const res = await axios.get("http://localhost:5000/api/todos");

    dispatchEvent({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (error) {
    dispatchEvent({
      type: GET_TODO_ERROR
    });
  }
};

// export const editTodo = (id, todoData) => async dispatchEvent => {
//   try {
//     await axios.put(`http://localhost:5000/api/todos/edit/${id}`, todoData);
//   } catch (error) {
//     dispatchEvent({
//       type: GET_TODO_ERROR
//     });
//   }
// };

export const deleteTodo = id => async dispatchEvent => {
  try {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
  } catch (error) {
    dispatchEvent({
      type: GET_TODO_ERROR
    });
  }
};
