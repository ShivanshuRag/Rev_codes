import UserContext from "../context/userContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <div style={{ text: "2xl", color: "red" }}>Please Login</div>;

  return (
    <div style={{ text: "2xl", color: "green" }}>
      {" "}
      Welcome in Mini Context : {user.username}
    </div>
  );
}
export default Profile;
