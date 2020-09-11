import { LOAD_TODOS, REMOVE_TODO } from "../types";

const initialState = {
  allTodos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        allTodos: action.payload,
      };
    case REMOVE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
