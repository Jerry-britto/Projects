import React ,{useContext}from 'react'
import './rightheader.css'
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import Logout from "@mui/icons-material/Logout";
import india from "./india.png"


function RightHeader({logClose,logout}) {
    const { account, setAccount } = useContext(LoginContext);
  
  return (
    <>
      <div className='rightheader'>
        <div className='right_nav' >
        {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar2" />
        )}
        {account?<h3>Hello, {account.fname.toUpperCase()}</h3>:""}
        </div>
        <div className='nav_btn' onClick={()=>logClose()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop by category</NavLink>
            <Divider/>
            <NavLink to="/">Today's Deal</NavLink>
            {
                account? <NavLink to="/buynow">Your Orders</NavLink>:
                <NavLink to="/login">Your Orders</NavLink>
            }
            <Divider/>
            <div className='flag'>
                <NavLink to="/">Settings</NavLink>
                <img src={india} style={{width:35,marginRight:"10px"}} alt='settings logo' />
            </div>
            {
              account?
              <div className='flag'>
                <Logout style={{fontSize:18,marginRight:"4px"}}/>
                <h3 onClick={()=>logout()} style={{cursor:"pointer",fontWeight:500}}>Log Out</h3>
              </div>:
              <NavLink to="/login">
                Sign in
              </NavLink>
            }
        </div>
      </div>
    </>
  )
}

export default RightHeader
