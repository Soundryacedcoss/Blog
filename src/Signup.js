import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./SignUp.css";
export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [logarr, setLogarr] = useState([]);
  // functions for taking the value from input boxes
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };
  const SignUpButtonHandler = (e) => {
    e.preventDefault();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (name === "") {
      alert("name should not be empty");
      document.form.name.focus();
    } else if (!isNaN(name)) {
      alert("Name Should not be integer");
      document.form.name.focus();
    } else if (email === "") {
      alert("Plese enter your email");
      document.form.email.focus();
    } else if (
      atposition < 1 ||
      email.lastIndexOf(".") < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      alert("please enter valid email");
      document.form.email.focus();
    } else if (username === "") {
      alert("Please enter your username");
      document.form.username.focus();
    } else if (password === "") {
      alert("please enter password");
      document.form.psw.focus();
    } else if (number === "") {
      alert("Enter mobile number");
      document.form.number.focus();
    } else if (isNaN(number)) {
      alert("number should be integer");
      document.form.number.focus();
    } else {
      var obj = {
        name: name,
        email: email,
        username: username,
        password: password,
        number: number,
      };
      logarr.push(obj);
      let arr = JSON.stringify(logarr);
      // set the values in local storage
      localStorage.setItem("data", arr);
      alert("Created account succesfully Now please login");
      navigate("/Login");
    }
  };
  // back to login page
  const Loginhere = () => {
    navigate("/Login");
  };
  return (
    <div>
      <div className="LoginPage">
        <h1>Sign Up</h1>
        <hr />
        <form>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={nameHandler}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={emailHandler}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={usernameHandler}
          />
          <input
            type="password"
            name="password"
            autoComplete="on"
            placeholder="Enter Password"
            onChange={passwordHandler}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter your number"
            onChange={numberHandler}
            maxLength={10}
            minLength={10}
          />
          <button
            type="submit"
            className="SignUpBUtton"
            onClick={SignUpButtonHandler}
          >
            Sign Up
          </button>
          <p className="LoginSignUpLink" onClick={Loginhere}>
            {" "}
            Already have account <b> LoginHere</b>
          </p>
        </form>
      </div>
    </div>
  );
}
