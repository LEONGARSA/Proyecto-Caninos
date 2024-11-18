import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

function Login() {
  return (
    <div className="wrapper">
      <form action="">
        <center><PetsOutlinedIcon className='icon' /></center>
        <h1>Login</h1>
        <div className="inputbox">
          <input type="text" placeholder='Username' required />
          <AccountCircleOutlinedIcon className='icon' />
        </div>
        <div className="inputbox">
          <input type="Password" placeholder='Password' required />
          <HttpsOutlinedIcon className='icon' />
        </div>

        <div className="rememberforgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>

        <Button variant="contained" sx={{ width: '100%' }}>Login</Button>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;