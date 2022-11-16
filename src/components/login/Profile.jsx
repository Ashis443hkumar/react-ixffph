import React, { useState } from "react";
import "./style"
import { NavLink } from "react-router-dom";


export default function Profile() {
  const [inpval, setinpval] = useState({

    name:"",
    phone:"",
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
          <h1>Profile Pages</h1>
          <div className="login">
              <label htmlFor="">Name</label>
              <input type="text"  name="name" id="name" onChange={getData} placeholder="full Name" />
          </div>
          <div className="login">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="email" onChange={getData} placeholder="Email address" />
          </div>
          <div className="login">
              <label htmlFor="" >Phone</label>
              <input type="number" name="number" id="number"  onChange={getData}  placeholder="Your number" />
          </div>
          <div className="login">
              <label htmlFor="login">Password</label>
              <input type="text" name="passsword" id="password"  onChange={getData} placeholder="password" />
          </div>
            <NavLink to="/"><button onClick={addData}>Submit</button></NavLink>


        </from>    

    </div>
    

  );
}
