import { LOAD_TODOS, REMOVE_TODO, TOGGLE_TODO } from "../types";

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
    case TOGGLE_TODO:
      const data = state.allTodos.slice();
      const list = state.allTodos.find(
        (item) => item.id === action.payload.list_id
      );
      const todo = list.todos.find((item) => item.id === action.payload.id);

      todo.checked = !todo.checked;
      return {
        ...state,
        allTodos: data,
      };
    default:
      return state;
  }
};
