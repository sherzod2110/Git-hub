// IMPORT IN REACT
import { NavLink as Link } from "react-router-dom";
import React, { useState } from "react";

// IMPORT CSS
import "./Login.css";

// IMPORT IMG 
import logo from "../../assets/img/logo.png";

// FUNCTION LOGIN 
export default function Login({ login }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    userName: userName,
    password: password,
  };
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="text-center">
            <Link to="/">
              <img className="login-img mt-5" src={logo} alt="" />
            </Link>
            <p className="login-text">Sign in to GitHub</p>

            <div className="box-login">
              <div>
                <p className="inp-text">Username or email address</p>
                <input
                  className="inp-form"
                  type="text"
                  placeholder="Email"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <p className="inp-text m-0">Password</p>
                  <p className="login-link m-0">Forgot password?</p>
                </div>
                <input
                  className="inp-form"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div>
                  <button
                    className=" btnx-success"
                    type="submit"
                    onClick={() => login(params)}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </div>

            <div className="box-login-2 mt-3 text-center">
              <div className="d-flex gap-2 ps-4 ms-1">
                <p className="m-0 text">New to GitHub?</p>
                <p className="m-0 text-2">Create an account .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
