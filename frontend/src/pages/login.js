import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Protected } from "./data";
import { FaEyeSlash, FaEye } from "react-icons/fa";
export default function Login() {
  // context stuff
  const [logged, Setlogged] = useContext(Protected);
  //-----
  const [text, setText] = useState({});
  var [bool, setBool] = useState(false);
  var [bool2, setBool2] = useState(false);
  var [bool3, setBool3] = useState(false);
  const [vis, setVis] = useState("password");
  const [pass, setPass] = useState(""); // view
  var history = useHistory();
  //-----
  function viewPass() {
    if (vis === "password") {
      setVis("text");
      setPass("hide");
    } else {
      setVis("password");
      setPass(""); // view
    }
  }
  //------
  function handleLogin() {
    setBool(false);
    var count = 0;
    for (var i in text) {
      if (text[i] === "") return setBool(true);
      count += 1;
    }
    if (count === 2) {
      console.log(text);
      axios
        .post("http://localhost:5000/login", {userName : text.username,password : text.password})
        .then((user) => {
          console.log(user.data.mismatch);
          if (user.data.mismatch === 1) setBool2(true);
          else if (user.data.exists === 0) setBool3(true);
          else {
            Setlogged(true);
            history.push(`/welcome/${text.username}/${user.data.type}`);
          }
        })
        .catch((err) => console.log(err));

      //console.log(text);
    } else return setBool(true);
  }
  // -----------------
  function handleTexting(e) {
    setBool(false);
    setBool2(false);
    setBool3(false);
    const nom = e.target.name;
    const val = e.target.value;
    setText({ ...text, [nom]: val });
  }
  return (
    <div className="App">
      <h2 className="alert-success">
        Don't have account?{" "}
      </h2>

      <Link to="/signup">
        <button className="btn btn-danger">Sign up </button>
        <br></br>
      </Link>
      <br></br>
      {bool ? (
        <p className="alert-danger">Please fill the credentials</p>
      ) : null}
      {bool2 ? <p className="alert-danger">Password is in correct</p> : null}
      {bool3 ? <p className="alert-danger">Username doesnot exists</p> : null}
      <input
        className="form-control"
        placeholder="Username"
        type="text"
        name="username"
        onChange={handleTexting}
      />
      <br></br>
      <div className="password">
        <div style={{ float: "left" }}>
          <input
            className="form-control"
            placeholder="Password"
            type={vis}
            name="password"
            onChange={handleTexting}
            style={{width:"27vw"}}
          />
        </div>
        <div style={{ float: "left" }}>
          <button
            className="btn btn-secondary"
            style={{ width: 50 }}
            onClick={viewPass}
          >
            {pass === "" ? <FaEye /> : <FaEyeSlash />}{" "}
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      
      <button type="submit" onClick={handleLogin} className="btn btn-success">
        Login
      </button>
    </div>
  );
}
