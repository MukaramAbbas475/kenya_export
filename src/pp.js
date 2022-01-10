import React, { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = { username, password };

    const response = await axios.post("https://reqres.in/api/users", {
      // method: "POST",
    //  headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    });

    setUser(response.data);

    localStorage.setItem("users", response.data);
    console.log(response.data);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser({});
    setUsername("");
    setPassword("");
  };

  if (user) {
    return (
      <>
        <div>
          {user.name} is loggged in
          <button onClick={handleLogout}>
            <Link to="/pp">logout</Link>
          </button>
        </div>
        ;
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input
          type="text"
          value={username}
          placeholder="Enter a Name"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            placeholder="Enter a Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Pp;
