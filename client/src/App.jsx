import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);

  // Created Data in Database || Create

  const CreateData = async () => {
    try {
      const data = await axios.post("http://localhost:8080/create-data", {
        name: name,
        age: age,
      });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Get Data From Database || Read

  useEffect(() => {
    const GetData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/read-data");
        console.log(result.data);
        setList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetData();
  }, []);

  //Update Data of Database || PUT

  const UpdateData = async (id) => {
    try {
      const newName = prompt("Enter new name");
      const newAge = prompt("Enter new age");
      const data = await axios.put(`http://localhost:8080/update-data/${id}`, {
        name: newName,
        age: newAge,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name...."
          className="input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your Age...."
          className="input"
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={CreateData}>Add</button>
      </form>
      {list.map((value) => (
        <div className="mapped_items">
          <h1>{value.name}</h1>
          <h1>{value.age}</h1>
          <button onClick={() => UpdateData(value._id)}>Update</button>
          <button>Delete</button>
        </div>
      ))}
    </main>
  );
}

export default App;
