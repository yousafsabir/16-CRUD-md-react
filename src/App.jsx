import { useState } from "react";
import "./App.css";

function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [Email, setEmail] = useState("");
  const [action, setAction] = useState("");
  const [formData, setFormData] = useState([
    { fName: "yousaf", lName: "sabir", Email: "yousafSabir2" },
    { fName: "yousaf", lName: "sabir", Email: "yousafSabir2" },
    { fName: "yousaf", lName: "sabir", Email: "yousafSabir2" },
  ]);
  function whenOnchange(e) {
    const { name, value } = e.target;
    if (name === "fName") {
      setfName(value);
    } else if (name === "lName") {
      setlName(value);
    } else if (name === "Email") {
      setEmail(value);
    }
  }
  function addData() {
    setFormData([...formData, { fName, lName, Email }]);
    setfName("");
    setlName("");
    setEmail("");
  }

  return (
    <div className="App">
      <h1>Employees List</h1>
      <form>
        <input
          value={fName}
          type="text"
          onChange={(e) => {
            whenOnchange(e);
          }}
          placeholder="First Name"
        />
        <input
          value={lName}
          type="text"
          onChange={(e) => {
            whenOnchange(e);
          }}
          placeholder="Last Name"
        />
        <input
          value={Email}
          type="email"
          onChange={(e) => {
            whenOnchange(e);
          }}
          placeholder="Email"
        />
        <button type="submit">Add Employee</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.fName}</td>
                <td>{data.lName}</td>
                <td>{data.Email}</td>
                <td>
                  <button>Update</button>
                  <button>Delete</button>
                  <button>View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
