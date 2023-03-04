import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import "./SignIn.css"
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='signin'>
        <form action="submit" className='signin-form'>
            <div className="logo">
                <img src="https://e7.pngegg.com/pngimages/523/198/png-clipart-google-logo-google-search-google-play-google-text-logo.png" alt="" />
            </div>
            <div className="sign-in-text">
                <h2>Sign in</h2>
            </div>
            <div className="continue">
                <p>to continue to Gmail</p>
            </div>
            <div className="email-or-phone">
            <TextField className='item' id="outlined-basic" size='small' label="Email or phone" variant="outlined" />
            </div>
            <div className="password">
                <TextField className='item' id='outlined-basic' size='small' label="Password" variant="outlined" type="password" />
            </div>
            <div className="forgot-email">
                <h5>Forgot email?</h5>
            </div>
            <div className="not-your-pc">
                <p>
            Not your computer? Use Guest mode to sign in privately.
                </p>
            </div>
            <div className="learn-more">
                <h5>Learn more</h5>
            </div>
            <div className="bottom">
                <div className="create-account">
                 <Link to="/signup"><h5>Create account</h5></Link> 
                    <Button variant="contained" className='btn'>Next</Button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignIn