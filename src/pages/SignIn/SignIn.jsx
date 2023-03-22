import React from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import "./SignIn.css"
import { Link } from 'react-router-dom';
import { Signin } from '../../services/service';
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const SignIn = () => {
    const [SignInObj,setSignInObj] = React.useState({email:"",password:""})
    const [regexObj, setRegexObj] = React.useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
      });

    const emailElement = (e) =>{
        setSignInObj((prevState)=>({
            ...prevState,email: e.target.value
        }))
    }

    const passwordElement = (e) =>{
        setSignInObj((prevState)=>({
            ...prevState,password:e.target.value
        }))
    }

    console.log(SignInObj)

    async function submit (){
        let emailTest = emailRegex.test(SignInObj.email);
        let passwordTest = passwordRegex.test(SignInObj.password);
        console.log(emailTest, passwordTest);

        if (emailTest === false) {
            setRegexObj((prevState) => ({
              ...prevState,
              emailError: true,
              emailHelper: "Enter correct email",
            }));
          } else {
            setRegexObj((prevState) => ({
              ...prevState,
              emailError: false,
              emailHelper: "",
            }));
          }
          if (passwordTest === false) {
            setRegexObj((prevState) => ({
              ...prevState,
              passwordError: true,
              passwordHelper: "Enter correct password",
            }));
          } else {
            setRegexObj((prevState) => ({
              ...prevState,
              passwordError: false,
              passwordHelper: "",
            }));
          }

          if(emailTest == true && passwordTest == true){
            let response = await Signin(SignInObj)
            console.log(response.data,"ll")
            localStorage.setItem("token",response?.data?.id)
            window.location.reload(true)
          }
    }
 
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
            <TextField onChange={emailElement}  className='item' id="outlined-basic" size='small' label="Email or phone" variant="outlined" error={regexObj.emailError} helperText={regexObj.emailHelper}  />
            </div>
            <div className="password">
                <TextField onChange={passwordElement} className='item' id='outlined-basic' size='small' label="Password" variant="outlined" type="password" helperText={regexObj.passwordHelper} error={regexObj.passwordHelper} />
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
                 <Link to="/dashboard" onClick={submit} style={{textDecoration:"none"}}><Button  variant="contained" className='btn' >Next</Button></Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignIn