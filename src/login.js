import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./rough.css";
import "./Login.scss";
import L1 from "./Images/logo.png";
import L2 from "./Images/auth.png";
import NavBar from "./navBar";
import DashBoard from "./DashBoard";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([{ email: "", password: "" }]);
  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
    formErr: "",
  });
  const inputHandler = (e) => {
    if (e.target.id === "email") {
      let err =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (e.target.value.match(err)) {
        setError({ ...error, emailErr: "" });
      } else {
        setError({
          ...error,
          emailErr: "Please enter Valid Email e.g abc@xyz.com",
        });
      }
      setUser({ ...user, email: e.target.value });
    }
    if (e.target.id === "password") {
      let err = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (e.target.value.match(err)) {
        setError({ ...error, passwordErr: "" });
      } else {
        setError({
          ...error,
          passwordErr: "Please Enter Valid Password e.g Abc123$",
        });
      }
      setUser({ ...user, password: e.target.value });
    }
  };
  const hist = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      setData([...data, user]);
      setUser({ email: "", password: "" });
      setError({ ...error, formErr: " " });

      //
      localStorage.setItem("Mukaram", JSON.stringify(user));
      hist.push("/DashBoard");
      // window.history.clear();
      // sessionStorage.clear();
    } else {
      setError({ ...error, formErr: "Please Fill All Fields" });
    }
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("Mukaram");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  // const[cat,setCat]=useState(null);

  // useEffect(()=>{
  //   fetch("https://breakingbadapi.com/api/characters")
  //   .then((response)=>{response.json()
  //   .then((result)=>{setCat(result)
  //   console.log(result)})
  //   })
  // });
  //   const showData=()=>{
  // fetch("https://breakingbadapi.com/api/characters")
  // .then((response)=>{
  //   response.json().then((result)=>{
  //     //console.warn(result.data)
  //     setData({user:result.data})
  //   })
  // })
  //   };
  if (localStorage.getItem("Mukaram")) {
    return (
      <>
        <DashBoard />
      </>
    );
  }
  return (
    <>
      <div className="blackground">
        <NavBar />
      </div>
      <div className="login_main ">
        <div className="container card_main">
          <div className="">
            <img alt="img" src={L1} />
            <p className="login_text1"> Welcome Back</p>
            <form onSubmit={submitHandler} className="">
              <div className="form-container">
                <div className="wrapper">
                  <div className="input-wrapper">
                    {error.formErr && <p>{error.formErr}</p>}
                    <input
                      placeholder="&nbsp;"
                      name="email"
                      value={user.email}
                      id="email"
                      type="email"
                      onChange={inputHandler}
                    />
                    <label data-content="Enter Your Email"></label>
                    {/* <br /> */}
                    {error.emailErr && <p>{error.emailErr}</p>}
                    </div>
                   
                    <div className="input-wrapper">
                    <input
                      name="password"
                      type="password"
                      id="password"
                      placeholder="&nbsp;"
                      onChange={inputHandler}
                      type="password"
                    />
                    <label data-content="Enter Your Password"></label>
                   
                    {error.passwordErr && <p>{error.passwordErr}</p>}
                    {/* <button>Forgot Password?</button> */}
                    </div>
                   
                    <button
                    className="btn-primary"
                      type="submit"
                      value="LOGIN"
                      onClick={submitHandler}
                      id="login"
                    >
                      Login
                    </button>
                    <p>
                      Don't have an account?
                      <Link>SIGN UP</Link>
                    </p>
                  
                </div>
              </div>
            </form>
          </div>
          <div className="login_right">
            <img src={L2} className="login_img2" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
