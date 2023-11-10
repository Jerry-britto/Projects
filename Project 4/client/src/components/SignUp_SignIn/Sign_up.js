import React, { useState } from "react";
import "./signup.css";
import logo from "./blacklogoamazon.png";
import { NavLink } from "react-router-dom";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sign_up = () => {
  const [userData, setUserData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const addData = async(e)=>{
    e.preventDefault()
    const {fname,email,mobile,password,cpassword} = userData
    if(!fname || !email || !mobile || !password || !cpassword){
      toast.warning("Dont keep the input fields empty",{
        position:'top-center'
      })
      return;
    }
    else if(!fname){
      toast.error("Name is required",{
        position:'top-center'
      })
      return;
    }
    else if(!email){
      toast.error("Email is required",{
        position:'top-center'
      })
      return;
    }
    else if(!mobile){
      toast.error("phone number is required",{
        position:'top-center'
      })
      return;
    }
    else if(!password){
      toast.error("Password is required",{
        position:'top-center'
      })
      return;
    }
    else if(!cpassword){
      toast.error("Password is required",{
        position:'top-center'
      })
      return;
    }

    const res = await Axios.post('/register',userData)
    console.log(res)
    
    if(res.status!==422){
      toast.success("Data successfully added",{
        position:"top-center"
      })
      setUserData({...userData,fname:"",email:"",mobile:"",password:"",cpassword:""})
    }
  }
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src={logo} alt="Amazon header" />
        </div>

        <div className="sign_form">
          <form>
            <h1>Sign Up</h1>
            <div className="form_data">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="fname"
                id="name"
                value={userData.fname}
                onChange={(e) =>
                  setUserData({ ...userData, fname: e.target.value })
                }
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <div className="form_data">
              <label htmlFor="phone_no">Phone Number</label>
              <input
                type="text"
                name="mobile"
                id="phone_no"
                value={userData.mobile}
                onChange={(e) =>
                  setUserData({ ...userData, mobile: e.target.value })
                }
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Atleast 6 char"
                id="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordAgain">Password Again</label>
              <input
                type="password"
                name="cpassword"
                id="passwordAgain"
                value={userData.cpassword}
                onChange={(e) =>
                  setUserData({ ...userData, cpassword: e.target.value })
                }
              />
            </div>
            <button className="signin_btn" onClick={addData}>Continue</button>
            <div className="signin_info">
              <p>Already Have an account</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
    </section>
  );
};

export default Sign_up;
