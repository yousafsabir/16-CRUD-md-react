import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Employees List</h1>
      <form
        action="
    "
      >
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
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
          <tr>
            <td>Yousaf</td>
            <td>Sabir</td>
            <td>yousaf#gmail.com</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
              <button>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
