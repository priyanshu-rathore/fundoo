import axios from "axios";

export const Signin = async (obj)=>{
let response =  await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',obj)
return response
}

export const userSignUp = async (obj) =>{
  let response  = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',obj)
  return response
}