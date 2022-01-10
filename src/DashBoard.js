import React from "react";
import "./rough.css";
import { Redirect, useHistory } from "react-router-dom";
import NavBar from "./navBar";
const DashBoard = () => {
 // localStorage.clear();
  //   // const[user,setUser]=useState()
  const history = useHistory();
  // useEffect(() => {
  //     const loggedInUser = localStorage.getItem("user");
  //     if (loggedInUser) {
  //       const foundUser = JSON.parse(loggedInUser);
  //       setUser(foundUser);
  //     }
  //   }, []);

  const BackHome = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <div className="blackground">
        <NavBar />{" "}
      </div>
      <h1>Welcome to yours DashBoard</h1>
      <button onClick={BackHome}>Logout</button>
      {/* <Redirect to="/login" /> */}
    </>
  );
  // (
  // <>
  //   <div className="blackground">
  //     <NavBar />{" "}
  //   </div>
  //   <h1>Welcome to yours DashBoard</h1>
  //   {/* <Redirect to="/login"/>   */}
  //   <button onClick={BackHome}>Logout</button>
  //   {/* <button>Logout</button> */}
  // </>);
};
export default DashBoard;
