

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-around h-screen ">
        <div className=" flex flex-col text-center rounded-lg " >
          <div className="bg-teal-500 text-white p-10 rounded-t-lg">
            One of my most productive days was throwing away 1000 lines of code.
          </div>
          <div className="bg-gray-200 p-8 rounded-b-lg">
            <p className="text-teal-700">Ken Thompson</p>
            <p>Designer of Unix Operating System</p>
          </div>
        </div>
        <div className=" flex items-center ">
          <div className="bg-blue-400 p-10 rounded-2xl">
            <p className="text-white">Admiral Grace Hopper</p>
            <p className="text-gray-300">Inventor of Programming Complex</p>
          </div>
          <div className="p-13 rounded-r-3xl  bg-gray-100 ">
            <p>A ship in the port is safe, but that's not what ships are built for </p>
          </div>
        </div>
        <div className=" flex flex-col text-center items-start">
          <div className="p-10 bg-rose-400 text-white">If you optimize everything, you will always be unhappy</div>
          <div className="flex flex-col bg-rose-200 p-3 ">
            <p className="text-red-800">Donald Knuth</p>
            <p>Pioneer of Algorithm Principle</p>
          </div>
        </div>
      </div>
    </>
  );
}
