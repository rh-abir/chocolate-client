import { useEffect, useState } from "react";
import "./App.css";
import ChocolatesTables from "./components/ChocolatesTables";

function App() {
  const [chocolates, setChocolates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allChocolates")
      .then((res) => res.json())
      .then((data) => setChocolates(data));
  }, []);

  return (
    <div className="lg:mx-60 my-20">
      <h1 className="text-4xl font-semibold text-center  bg-[#B47139] text-white mb-10 py-4">
        Chocolate Management System
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              chocolates.map(chocolate => <ChocolatesTables
               key={chocolate._id}
               chocolate = {chocolate}
              ></ChocolatesTables>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
