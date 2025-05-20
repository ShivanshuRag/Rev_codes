import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [{ id: 1, todo: "helo ", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
