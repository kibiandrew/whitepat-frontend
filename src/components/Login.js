import React, { useState } from "react";
import { Link } from "react-router-dom";

const Url ="http://localhost:9292/userlogin"


const Login = () => {

  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  const [userData, setUserData] = useState("");
  const [submittedData, setSubmittedData] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (event) => {
    setSubmittedData({
      ...submittedData,
      [event.target.name]: event.target.value,
    });
  };

  const handlePassword = (event) => {
    setSubmittedData({
      ...submittedData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = {
      email: submittedData.email,
      password: submittedData.password,
    };
    fetch("http://localhost:9292/user")

    console.log(submittedData);
    fetch(`${Url}/userlogin`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
    // window.location.reload()
    // window.localStorage.setMessage("token", data.message.token);
    //     history.push("/");
  };

  if (userData.message === "login success") {
    const id = userData.user.id;
    const username = userData.user.username;
    const role = userData.user.role;
      
    window.location = `/${id}/${username}/${role}`;
  }


  return (
    <div className="login-container">

      <form className="login" onSubmit={handleSubmit}>
      <div className="loginHeader">
      <h2>Login</h2>
      </div>
        <h2 className="error"> {userData.message} </h2>

        <input
          type="email"
          required
          name="email"
          placeholder="Enter your Email"
          onChange={handleEmail}
          value={submittedData.email}
        />
        <br />
        <input
          type="password"
          required
          name="password"
          placeholder="Enter your Password"
          onChange={handlePassword}
          value={submittedData.password}
        />
        <br />
        {/* <button type="submit">Login</button> */}
        <div className="loginlinks">
        <button className="login-btn">Login</button>
        <p className="lastp">Click <Link to="/register"><span className="click-here">here</span></Link> to Register</p>
        </div>

                  {/* <button><Link to="/login">Register</Link></button> */}

      </form>
    </div>
  );
};

export default Login;
