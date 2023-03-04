import React from "react";
import "../SignUp/SignUp.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="sign-up">
        <form action="submit">
          <div className="left">
            <div className="logo">
              <img
                src="https://e7.pngegg.com/pngimages/523/198/png-clipart-google-logo-google-search-google-play-google-text-logo.png"
                alt=""
              />
            </div>
            <div className="second">
              <h2>Create your Google Account</h2>
            </div>
            <div className="third">
              <p>to continue to Gmail</p>
            </div>
            <div className="fourth">
              <div className="first-name">
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="last-name">
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div className="fifth">
              <TextField
                id="outlined-basic"
                helperText="You can use letters, numbers & periods"
                label="Username"
                variant="outlined"
                size="small"
                className="username"
                placeholder="xyz@gmail.com"
              />
            </div>
            <div className="sixth">
              <div className="password">
                <TextField
                  id="outlined-basic"
                  size="small"
                  type="password"
                  label="Password"
                  helperText="Use 8 or more characters with "
                />
              </div>
              <div className="confirm-password">
              <TextField
                  id="outlined-basic"
                  size="small"
                  type="password"
                  label="Confirm"
                  helperText="a mix of letters, numbers & symbols"
                />
              </div>
            </div>
            <div className="seventh">
            <FormControlLabel control={<Checkbox defaultChecked />} label="Show password" />
            </div>
            <div className="eight">
                <div className="sign-in-instead">
                  <Link to='/'><h5>Sign in instead</h5></Link> 
                </div>
                <div className="next">
                <Button variant="contained">Next</Button>
                </div>
            </div>
          </div>
          <div className="right">
            <div className="top">
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
            </div>
            <div className="bottom">
                <p>One account. All of Google working for you.</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
