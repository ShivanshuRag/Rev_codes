/* 

@Note = yaha per onclick() jo method hai usko function hi chahiye ,

onclick ko function return value nhi chahiye , vo accpect karta ki app usse ek function doge 

ex - 

onClick( setcolor) 

// setcolor bhi ek function ye bhi chelega but app parameter nhi pass kar sakte esme ,

onClick( setcolor("red"))

to yaha per direct excute ho jayega , bina click kiye , to onclick method , aapse function chahata hai


onClick(()=> setcolor("red"))

like this , app esme parameter nhi pass kar sakte hai


*/

import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="  flex-col p-2 bg-amber-100 justify-end space-x-1   fixed bottom-0 left-0 right-0">
        <button
          onClick={() => setcolor("red")}
          className=" bg-red-500 rounded-lg text-white p-2  "
          style={{ backgroundColor: "red" }}
        >
          red
        </button>
        <button
          onClick={() => setcolor("green")}
          className=" bg-green-500 rounded-lg text-white  p-2 "
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          onClick={() => setcolor("blue")}
          className=" bg-blue-500 rounded-lg text-white  p-2 "
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
        <button
          onClick={() => setcolor("orange")}
          className=" bg-orange-500 rounded-lg text-white  p-2 "
          style={{ backgroundColor: "orange" }}
        >
          orange
        </button>
        <button
          onClick={() => setcolor("yellow")}
          className=" bg-yellow-500 rounded-lg text-white  p-2"
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>
        <button
          onClick={() => setcolor("purple")}
          className=" bg-purple-500 rounded-lg text-white  p-2 "
          style={{ backgroundColor: "purple" }}
        >
          purple
        </button>
      </div>
    </div>
  );
}

export default App;
