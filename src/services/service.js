import axios from "axios";

let headerConfig  = {
  headers:{
      "Access-Control-Allow-Origin": true
  }
}

export const Signin = async (obj)=>{
let response =  await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',obj,headerConfig)
return response
}

export const userSignUp = async (obj) =>{
  let response  = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',obj,headerConfig)
  return response
}