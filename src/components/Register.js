import React, { useState } from "react";
import { Link } from "react-router-dom";
const Url="http://localhost:9292/userregistration"



const Register = () => {

  const [userData, setUserData] = useState("");
  const [submittedData, setSubmittedData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleFirstNameChange = (event) => {
    setSubmittedData({
      ...submittedData,
      [event.target.name]: event.target.value,
    });
  };

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
  const handleSelectChange = (event) => {
    setSubmittedData({
      ...submittedData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = {
      username: submittedData.username,
      email: submittedData.email,
      password: submittedData.password,
      role: submittedData.role,
    };

    // console.log(submittedData);
    fetch(`${Url}/userregistration`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
      // window.location.reload();
      // " successfully submitted"
      setSubmittedData({
        username: "",
        email: "",
        password: ""
      })
  };



  return (
    <div className="register-container">

      <form className="login" onSubmit={handleSubmit}>
      <div className="loginHeader">
        <h2>Register</h2>
      </div>
      <h2 className="error"> {userData.message}</h2>
        <input
          type="text"
          required
          name="username"
          placeholder="Enter your name"
          onChange={handleFirstNameChange}
          value={submittedData.username}
        />
        <br />
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
         <div className="selectoption">
         <label>Select Role:</label>
        <select
          name="role"
          required
          value={submittedData.role}
          onChange={handleSelectChange}
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
         </div>
        <br />
        <div className="registerlinks">
        <button   type="submit">Submit</button>
        <p className="lastp">Click <Link to="/"><span className="click-here">here</span></Link> to Login</p>
        </div>
        {/* <button><Link to="/login">Register</Link></button> */}
      </form>
    </div>
  );
};

export default Register;
