import UserContext from "../context/userContext";
import { useContext, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {"  "}
      <div style={{ margin: "10px" }}>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
