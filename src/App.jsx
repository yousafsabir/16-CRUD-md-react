import { useState } from "react";
import "./App.css";

let empData = [];
function App(props) {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [useremail, setEmail] = useState("");
  const [formData, setFormData] = useState([]);
  const [newForm, setNewForm] = useState([]);
  const [newBtnName, setnewBtnName] = useState(false);
  const [arrayIndex, setarrayIndex] = useState(0);

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
        <label className="inputField">
          <input
            value={fName}
            onChange={(e) => {
              whenOnchange(e);
            }}
            type="text"
            name="fName"
            required
          />
          <span className="placeholder">First Name</span>
        </label>
        <label className="inputField">
          <input
            value={lName}
            onChange={(e) => {
              whenOnchange(e);
            }}
            type="text"
            name="lName"
            required
          />
          <span className="placeholder">Last Name</span>
        </label>
        <label className="inputField">
          <input
            value={useremail}
            onChange={(e) => {
              whenOnchange(e);
            }}
            type="text"
            name="email"
            required
          />
          <span className="placeholder">Email</span>
        </label>
        <button
          onClick={(e) => {
            if (e.target.value == "Add Employee") {
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
            } else {
              console.log("updating");
              formData[arrayIndex].userfName = fName;
              formData[arrayIndex].userlName = lName;
              formData[arrayIndex].email = useremail;
              setFormData(formData);
              setfName("");
              setlName("");
              setEmail("");
              setnewBtnName(false);
            }
          }}
          type="add"
          value={newBtnName ? "Update" : props.btnName}
        >
          {newBtnName ? "Update" : props.btnName}
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
                  <button
                    onClick={() => {
                      setnewBtnName(true);
                      formData.map((newData, index) => {
                        if (newData.email == data.email) {
                          setarrayIndex(index);
                          setfName(newData.userfName);
                          setlName(newData.userlName);
                          setEmail(newData.email);
                          setFormData([...formData]);
                        }
                      });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="Icons"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      formData.map((newData, index) => {
                        if (newData.email == data.email) {
                          console.log(index);
                          formData.splice(index, 1);
                          setFormData([...formData]);
                        }
                      });
                      // console.log(newForm);
                      // setFormData(formData);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="Icons"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
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

App.defaultProps = {
  btnName: "Add Employee",
};

export default App;
