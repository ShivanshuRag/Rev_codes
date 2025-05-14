import { useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [charlength, setCharLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [input, setInput] = useState("");

  let passwordRef = useRef(null);
  function password() {
    let str = "";
    let Alpha = "ABCDEFGHIJKLMNOPQUSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) Alpha += "0123456789";
    if (char) Alpha += "!~@#$%^&*()+=_";

    for (let i = 0; i <= charlength - 1; i++) {
      let random = Math.floor(Math.random() * Alpha.length);
      str += Alpha[random];
    }

    setInput(str);
  }

  useEffect(() => {
    password();
  }, [charlength, number, char]);

  function copyPassword() {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(input);
  }
  return (
    <>
      <div className=" justify-center ">
        <div className=" flex-col w-1/2 p-8  bg-amber-200 ml-auto mr-auto mt-7 rounded-xl">
          <span>
            <input
              type="text"
              value={input}
              onChange={(e) => e.target.value}
              ref={passwordRef}
              className=" text-amber-700 p-2 rounded-lg  border-2 w-auto outline-none"
            />
            <button
              className=" bg-blue-800 text-white font-bold p-2 hover:bg-blue-700 rounded-lg "
              onClick={copyPassword}
            >
              copy
            </button>
          </span>
          <div className="mt-2 ">
            <input
              type="range"
              value={charlength}
              min={5}
              max={50}
              onChange={(e) => {
                setCharLength(e.target.value);
              }}
            />
            <label htmlFor="">Length({charlength})</label>

            <input
              type="checkbox"
              className="mr-1 ml-2"
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="">Number</label>

            <input
              type="checkbox"
              className="mr-1 ml-2"
              onChange={(e) => setChar(e.target.value)}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
