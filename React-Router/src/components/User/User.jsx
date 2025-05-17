import { useParams } from "react-router-dom";
export function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="text-6xl text-fuchsia-700 bg-gray-800 p-6 rounded-lg text-center">
        User:{userId}
      </div>
    </>
  );
}
