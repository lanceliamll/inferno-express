import {
  ADD_TODO_ERROR,
  GET_TODO,
  GET_TODO_ERROR,
  GET_TODOS
} from "../actions/types";

const initialState = {
  todo: null,
  todos: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload
      };
    case ADD_TODO_ERROR:
    case GET_TODO_ERROR:
      return {
        ...state,
        todo: null,
        todos: []
      };
    case GET_TODO:
      return {
        ...state,
        todo: payload
      };

    default:
      return state;
  }
}
