import { LOAD_TODOS, REMOVE_TODO, TOGGLE_TODO } from "../types";

export const loadTodos = () => {
  return {
    type: LOAD_TODOS,
    payload: [
      {
        id: 4,
        title: "Семья",
        candidate_id: 2,
        created_at: "2020-07-10T13:05:07.801Z",
        updated_at: "2020-07-10T13:05:07.801Z",
        todos: [
          {
            id: 9,
            text: "Купить молоко",
            list_id: 4,
            checked: false,
            created_at: "2020-07-10T13:05:07.822Z",
            updated_at: "2020-07-10T13:05:07.822Z",
          },
          {
            id: 10,
            text: "Постирать вещи",
            list_id: 4,
            checked: false,
            created_at: "2020-07-10T13:05:07.826Z",
            updated_at: "2020-07-10T13:05:07.826Z",
          },
          {
            id: 11,
            text: "Убрать комнату",
            list_id: 4,
            checked: true,
            created_at: "2020-07-10T13:05:07.828Z",
            updated_at: "2020-07-10T13:05:07.828Z",
          },
        ],
      },
      {
        id: 5,
        title: "Работа",
        candidate_id: 2,
        created_at: "2020-07-10T13:05:07.832Z",
        updated_at: "2020-07-10T13:05:07.832Z",
        todos: [
          {
            id: 12,
            text: "Заполнить отчет",
            list_id: 5,
            checked: false,
            created_at: "2020-07-10T13:05:07.836Z",
            updated_at: "2020-07-10T13:05:07.836Z",
          },
          {
            id: 13,
            text: "Отправить документы",
            list_id: 5,
            checked: false,
            created_at: "2020-07-10T13:05:07.838Z",
            updated_at: "2020-07-10T13:05:07.838Z",
          },
          {
            id: 14,
            text: "Позвонить заказчику",
            list_id: 5,
            checked: true,
            created_at: "2020-07-10T13:05:07.841Z",
            updated_at: "2020-07-10T13:05:07.841Z",
          },
        ],
      },
      {
        id: 6,
        title: "Прочее",
        candidate_id: 2,
        created_at: "2020-07-10T13:05:07.843Z",
        updated_at: "2020-07-10T13:05:07.843Z",
        todos: [
          {
            id: 15,
            text: "Позвонить к другу",
            list_id: 6,
            checked: false,
            created_at: "2020-07-10T13:05:07.847Z",
            updated_at: "2020-07-10T13:05:07.847Z",
          },
          {
            id: 16,
            text: "Подготовиться к поездке",
            list_id: 6,
            checked: false,
            created_at: "2020-07-10T13:05:07.849Z",
            updated_at: "2020-07-10T13:05:07.849Z",
          },
        ],
      },
      {
        id: 7,
        title: null,
        candidate_id: 2,
        created_at: "2020-07-12T14:08:44.220Z",
        updated_at: "2020-07-12T14:08:44.220Z",
        todos: [],
      },
    ],
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id, list_id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id, list_id },
  };
};
