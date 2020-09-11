import { LOAD_TODOS, REMOVE_TODO } from "../types";

export const loadTodos = () => {
  const data = [1, 2, 3];

  return {
    type: LOAD_TODOS,
    payload: data,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
