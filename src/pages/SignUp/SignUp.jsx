import React from "react";
import "../SignUp/SignUp.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { userSignUp } from "../../services/service";
import { Link } from "react-router-dom";
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const nameRegex = /^[a-zA-Z]{2,}$/
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;





const SignUp = () => {
  // const [signUp,setSignUp] = React.useState({
  //   "firstName":"",
  //   "lastName":"",
  //   "email":"",
  //   "password":"",
  //   "confirmPassword":""
  // })

  const [signUpObj,setSignUpObj] = React.useState({
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":"",
    "service":"advance"

  })





  let [toggler,setToggler] = React.useState(true);

  const [type,setType] =React.useState({
    typeOf:"password"
  })

  const toggle = () =>{
    if(toggler){
      setType({typeOf:"password"})
      setToggler(false)
      return
    }else{
      setType({typeOf:"text"})
      setToggler(true)
      return
    }

    
  }

 const firstName = (e) =>{
    setSignUpObj((prev)=>({
      ...prev,firstName:e.target.value
    }))
  }

 const lastName = (e) =>{
  setSignUpObj((prev)=>({
    ...prev,lastName:e.target.value
  }))
  }

 const username = (e) =>{
  setSignUpObj((prev)=>({
    ...prev,email:e.target.value
  }))
  }

 const password = (e) =>{
  setSignUpObj((prev)=>({
    ...prev,password:e.target.value
  }))
  }

 const confirmPassword = (e) =>{
  // setSignUpObj((prev)=>({
  //   ...prev,firstName:e.target.value
  // }))
  }


  const [regexObj, setRegexObj] = React.useState({
    firstNameError: false,
    firstNameHelper: "",
    lastNameError: false,
    lastNameHelper: "",
    passwordError: false,
    passwordHelper: "",
    confirmPasswordError:false,
    confirmPasswordHelper:"",
    emailError:false,
    emailHelper:""

  });

 const submit = async () =>{
  let firstNameTest = nameRegex.test(signUpObj.firstName)
  let lastNameTest = nameRegex.test(signUpObj.lastName)
  let passwordTest = passwordRegex.test(signUpObj.password)
  let emailTest = emailRegex.test(signUpObj.email)

  if(emailTest == false){
    setRegexObj((prevState)=>({
      ...prevState,emailError:true,emailHelper:"Enter correct username"
    }))
  }else{
    setRegexObj((prevState)=>({
      ...prevState,emailError:false,emailHelper:""
    }))
  }

  if(firstNameTest == false){
    setRegexObj((prevState)=>({
      ...prevState,firstNameError:true,firstNameHelper:"Enter correct name"
    }))
  }else{
    setRegexObj((prevState)=>({
      ...prevState,firstNameError:false,firstNameHelper:""
    }))
  }

  if(lastNameTest == false){
    setRegexObj((prevState)=>({
      ...prevState,lastNameError:true,lastNameHelper:"Enter correct name"
    }))
  }else{
    setRegexObj((prevState)=>({
      ...prevState,lastNameError:false,lastNameHelper:""
    }))
  }
  if(passwordTest == false){
    setRegexObj((prevState)=>({
      ...prevState,passwordError:true,passwordHelper:"Enter correct password"
    }))
  }else{
    setRegexObj((prevState)=>({
      ...prevState,passwordError:false,passwordHelper:""
    }))
  }

  // if(signUpObj.password !== signUp.confirmPassword){
  //   setRegexObj((prevState)=>({
  //     ...prevState,confirmPasswordError:true,confirmPasswordHelper:"Passwords doesn't match"
  //   }))
  // }else{
  //   setRegexObj((prevState)=>({
  //     ...prevState,confirmPasswordError:false,confirmPasswordHelper:""
  //   }))
  // }

  if(emailTest && firstNameTest && lastNameTest && passwordTest){
  

    await userSignUp(signUpObj)
  }
  
}



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
                  onChange={firstName}
                  error={regexObj.firstNameError}
                  helperText={regexObj.firstNameHelper}
                />
              </div>
              <div className="last-name">
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  size="small"
                  onChange={lastName}
                  error={regexObj.lastNameError}
                  helperText={regexObj.lastNameHelper}
                />
              </div>
            </div>
            <div className="fifth">
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                size="small"
                className="username"
                placeholder="xyz@gmail.com"
                onChange={username}
                error={regexObj.emailError}
                helperText={regexObj.emailHelper}
              />
            </div>
            <div className="sixth">
              <div className="password">
                <TextField
                  id="outlined-basic"
                  size="small"
                  type={type.typeOf}
                  label="Password"
                  onChange={password}
                  error={regexObj.passwordError}
                  helperText={regexObj.passwordHelper}
                  // helperText="Use 8 or more characters with "
                />
              </div>
              <div className="confirm-password">
              <TextField
                  id="outlined-basic"
                  size="small"
                  type={type.typeOf}
                  label="Confirm"
                  onChange={confirmPassword}
                  error={regexObj.confirmPasswordError}
                  helperText={regexObj.confirmPasswordHelper}
                  // helperText="a mix of letters, numbers & symbols"
                />
              </div>
              
            </div>
            <div className="text">
                <p>Use 8 or more characters with a mix of letters, numbers & symbols </p>
              </div>
            <div className="seventh">
            <FormControlLabel control={<Checkbox defaultChecked onClick={toggle}/>} label="Show password" />
            </div>
            <div className="eight">
                <div className="sign-in-instead">
                  <Link to='/'><h5>Sign in instead</h5></Link> 
                </div>
                <div className="next">
                <Button variant="contained" onClick={submit}>Next</Button>
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
