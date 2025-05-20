import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoContextProvider } from "./context/todoContext";
import { useId } from "react";
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const todoId = useId();

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: todoId, ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo: todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todoss = JSON.parse(localStorage.getItem("todos"));

    if (todoss && todoss.length > 0) {
      setTodos(todoss);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{<TodoForm />}</div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                {<TodoItem todo={todo} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
