import React from "react";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import "./style"


export default function Login() {

  const [inpval, setinpval] = useState({
    email: " ",
    password: " "
  })
  console.log(inpval)

  const[data, setdata] = useState([])

  const getData = (e) =>{

    // console.log(e.target.value)

    const {value, name} = e.target

    // const value = e.target.value

    setinpval(() =>{
      return{
        ...inpval,
        [name]:value
      }
    })
  }

  const addData = (e) =>{
    e.preventDefault()
    const {email, password}= inpval
    
    if(email == ""){
      alert("Email is a require ")
    }else if(!email.includes("@")){
      alert("plz enter the valid Email address ")
    }else if(password == ""){
      alert("Password Fild Is  Require")
    }else if(password.length < 5){
      alert("password length greather five")
    }else{
      console.log("data  added is successfully")

      localStorage.setItem("userYoutube", JSON.stringify([...data, inpval]))
    }

  }

  return (
    <div className="login_container">        
        <from>
          <h1>Login Pages</h1>
          <div className="login">
              <label htmlFor="">Email</label>
              <input type="text" onChange={getData} name="email" id="email" placeholder="Email address" />
          </div>
          <div className="login">
              <label htmlFor="">Passwprd</label>
              <input type="text" onChange={getData}  name="password" id="password" placeholder="password" />
          </div>
            <NavLink to="/"><button onClick={addData}>Submit</button></NavLink>

        </from>    

         <p>All ready is login <span><NavLink to="/profile">Sign Up</NavLink></span></p>
    </div>
  );
}
