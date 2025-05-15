import Card from "./components/Card";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=" w-1/2 justify-center items-center h-screen bg-red-200 p-5 ml-auto mr-auto mt-auto ">
        <div className=" justify-center items-center h-screen ml-auto mr-auto mt-auto mb-auto">
          <Card label="From" />
          <Card label="To" />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
