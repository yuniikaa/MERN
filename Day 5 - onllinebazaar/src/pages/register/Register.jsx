import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../../apis/Api";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handlePass2 = (e) => {
    setPass2(e.target.value);
  };

  //  handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, pass, pass2);

    try {
      registerApi({
        fname: fname,
        lname: lname,
        email: email,
        password: pass,
        password2: pass2,
      }).then((res) => {
        toast.success("User registered successfully");
      }).catch((err) => {
        console.log(err);
        toast.error("User registration failed");
      });
    } catch (error) {
      toast.error("Regisration failed");
    }

    // try {
    //   axios.post("http://localhost:5000/api/user/register", {
    //     fname: fname,
    //     lname: lname,
    //     email: email,
    //     password: pass,
    //     password2: pass2,
    //   }).then((res) => {
    //     toast.success("User registered successfully");
    //   }).catch((err) => {
    //     console.log(err);
    //     toast.error("User registration failed");
    //   });
      
    // } catch (error) {
    //   toast.error("Error in frontend");
    // }
  };

  return (
    <div className="container">
      <div className="col-md-5">
        <h1>Register a user</h1>

        <form action="">
          <div className="form-group">
            <label htmlFor="name">Firstname</label>
            <input
              onChange={handleFname}
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              onChange={handleLname}
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={handlePass}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={handlePass2}
              type="password"
              name="password2"
              id="password2"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-3 w-100"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;