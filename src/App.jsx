import { useState } from "react";
import "./App.css";

let empData = [];
function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [useremail, setEmail] = useState("");
  const [formData, setFormData] = useState([]);
  const [newForm, setNewForm] = useState([]);

  let whenOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    if (name === "fName") {
      setfName(value);
    } else if (name === "lName") {
      setlName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };
  return (
    <div className="App">
      <h1>Employees List</h1>
      <div className="Form">
        <input
          value={fName}
          onChange={(e) => {
            whenOnchange(e);
          }}
          type="text"
          placeholder="First Name"
          name="fName"
        />
        <input
          value={lName}
          onChange={(e) => {
            whenOnchange(e);
          }}
          type="text"
          placeholder="Last Name"
          name="lName"
        />
        <input
          value={useremail}
          onChange={(e) => {
            whenOnchange(e);
          }}
          type="text"
          placeholder="Email"
          name="email"
        />
        <button
          onClick={() => {
            if (fName == "" || lName == "" || useremail == "") {
              alert("Please input All feilds");
            } else {
              if (useremail.includes("@") && useremail.includes(".")) {
                setFormData([
                  ...formData,
                  { userfName: fName, userlName: lName, email: useremail },
                ]);
                setfName("");
                setlName("");
                setEmail("");
              } else {
                alert("Please enter valid email");
              }
            }
          }}
          type="add"
        >
          Add Employee
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{data.userfName}</td>
                <td>{data.userlName}</td>
                <td>{data.email}</td>
                <td>
                  <button>Update</button>
                  <button
                    onClick={(e) => {
                      formData.map((newData, index) => {
                        if (newData.email == data.email) {
                          console.log(newData);
                        } else {
                          setNewForm([...newForm, newData]);
                        }
                      });
                      setFormData(newForm);
                      // console.log(newForm);
                      // setFormData(formData);
                    }}
                  >
                    Delete
                  </button>
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
