import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

//appserver endpoint
// const URI = 'http://15.207.14.101:8080'
const URI = 'http://localhost:8080'

const userLogin = (signin) => axios.post(`${URI}/auth/login`, signin);
const   userRegister = (register) => axios.post(`${URI}/auth/signup`, register)

const posttax=(taxval)=>axios.post(`${URI}/auth/postproduct`,taxval);

export {userLogin,userRegister,posttax}