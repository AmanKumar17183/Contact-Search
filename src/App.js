import React, { useState } from "react";
import "./styles.css";
import { Users } from "./Users";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <h1>Contact searching project</h1>
      <input
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="userlist">
        {Users.filter((user) =>
          user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        ).map((user) => (
          <li key={user.id} className="username">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
