import React, { useState, useContext } from "react";
import logo from "./blacklogoamazon.png";
import "./signup.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../context/ContextProvider";

const Sign_in = () => {
  const { account, setAccount } = useContext(LoginContext);
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const addData = (e) => {
    const { name, value } = e.target;
    setLogData(() => {
      return {
        ...logData,
        [name]: value,
      };
    });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = logData;
    if (!email && !password) {
      toast.warning("Fill in your details", {
        position: "top-center",
      });
      return;
    } else if (!email) {
      toast.warning("Fill in your Email", {
        position: "top-center",
      });
      return;
    } else if (!password) {
      toast.warning("Fill in your Password", {
        position: "top-center",
      });
      return;
    } else {
      try {
        const res = await Axios.post("/login", logData);
        setAccount(res.data);
        toast.success("Logged in Successfully", {
          position: "top-center",
        });
        // console.log("Log in successfully");
        setLogData({ ...logData, email: "", password: "" });
        // console.log(account);
      } catch (error) { 
        console.log(error.message)
        toast.error("Account Not found", {
          position: "top-center",
        });
      }
    }
  };
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={logo} alt="Amazon header" />
          </div>

          <div className="sign_form">
            <form>
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={logData.email}
                  onChange={addData}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Atleast 6 char"
                  id="password"
                  value={logData.password}
                  onChange={addData}
                />
              </div>
              <button onClick={sendData} className="signin_btn">
                Continue
              </button>
            </form>
          </div>
          <ToastContainer />
          <div className="create_accountinfo">
            <p>New to Amazon</p>
            <NavLink to="/register">
              <button>Create your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
