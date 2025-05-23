import React, { useState } from "react";
import { removeTodo, updateTodo } from "../features/todoSlice.js";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // State to manage which todo is currently being edited
  const [editingTodoId, setEditingTodoId] = useState(null);
  // State to hold the new text for the todo being edited
  const [newTodoText, setNewTodoText] = useState("");

  // Function to handle starting the update process
  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setNewTodoText(todo.text); // Pre-fill the input with current todo text
  };

  // Function to handle saving the updated todo
  const handleSaveUpdate = (id) => {
    if (newTodoText.trim()) {
      // Ensure the new text is not empty
      dispatch(updateTodo({ id, text: newTodoText.trim() }));
      setEditingTodoId(null); // Exit editing mode
      setNewTodoText(""); // Clear the input
    } else {
      // In a real app, you'd show a user-friendly message here,
      // instead of an alert. For simplicity, we'll just log.
      console.log("Todo text cannot be empty!");
    }
  };

  // Function to handle canceling the update
  const handleCancelUpdate = () => {
    setEditingTodoId(null);
    setNewTodoText("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <li
            className="flex flex-col sm:flex-row justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg shadow-md"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              // Display input field when editing
              <div className="flex flex-col sm:flex-row items-center w-full space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                  className="flex-grow p-2 rounded-md bg-zinc-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSaveUpdate(todo.id)}
                    className="text-white bg-green-600 border-0 py-2 px-4 focus:outline-none hover:bg-green-700 rounded-md text-sm transition duration-200 ease-in-out transform hover:scale-105"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelUpdate}
                    className="text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded-md text-sm transition duration-200 ease-in-out transform hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // Display todo text and buttons when not editing
              <>
                <div className="text-white text-lg break-words w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
                  {todo.text}
                </div>
                <div className="flex space-x-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-md text-sm transition duration-200 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    title="Edit Todo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14.25v4.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5a2.25 2.25 0 012.25-2.25H12"
                      />
                    </svg>
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-md text-sm transition duration-200 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    title="Delete Todo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
