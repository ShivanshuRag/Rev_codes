import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "", text: "hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    upadateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload ? { text: action.payload } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, upadateTodo } = todoSlice.actions;

export default todoSlice.reducer;
