import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Created Data in database

  const PostData = async () => {
    try {
      const data = await axios.post("http://localhost:8080/create-data", {
        name: name,
        age: age,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form className="form">
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
        <button onClick={PostData}>Submit</button>
      </form>
    </main>
  );
}

export default App;
