import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-4xl text-white font-bold mb-8">Todo App</h1>
        <AddTodo />
        <div className="w-full max-w-md">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
