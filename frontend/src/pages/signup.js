import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alertinguser from "../components/alertinguser";
import { useHistory } from "react-router-dom";
import { Protected } from "./data";
function Signup() {
  let history = useHistory();
  const [logged, Setlogged] = useContext(Protected);
  var [bool, setBool] = useState(false);
  var [bool2, setBool2] = useState(false);
  const [text, setText] = useState({});
  const handletext = (e) => {
    setBool2(false);
    setBool(false);
    const nom = e.target.name;
    const val = e.target.value;
    setText({ ...text, [nom]: val });
  };
  //----------------
  function handleSubmit() {
    setBool2(false);
    setBool(false);
    var count = 0;
    for (var i in text) {
      if (text[i] === "") return setBool(true);
      count += 1;
    }
    if (count === 5) {
      axios
        .post("http://localhost:5000/signup", text)
        .then((user) => {
          if (user.data.aldready == 1) setBool2(true);
          else {
            Setlogged(true);
            history.push(`/welcome/${text.userName}`);
          }
        })
        .catch((err) => console.log(err));
    } else setBool(true); // check
  }

  return (
    <div className="App">
      <h2 className="alert-success" >
        Aldready have an account
      </h2>
      <Link to="/">
        <button className="btn btn-danger">Login </button>
        <br></br>
      </Link>
      {bool ? <Alertinguser text={"Please fill all credentials"} /> : null}
      {bool2 ? <Alertinguser text={"username aldready exists"} /> : null}
      {console.log(bool, bool2)}
      <br></br>
      <input
        className="form-control"
        placeholder="First Name"
        type="text"
        onChange={handletext}
        name="firstName"
      />
      <br></br>
      <input
        className="form-control"
        placeholder="Second Name"
        type="text"
        onChange={handletext}
        name="secondName"
      />
      <br></br>
      <input
        className="form-control"
        placeholder="Email"
        name="email"
        type="text"
        onChange={handletext}
      />
      <br></br>
      <input
        className="form-control"
        placeholder="Username"
        type="text"
        name="userName"
        onChange={handletext}
      />
      <br></br>
      <input
        className="form-control"
        placeholder="Password"
        type="password"
        name="password"
        onChange={handletext}
      />
      <br></br>
      <button className="btn btn-success" type="button" onClick={handleSubmit}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
