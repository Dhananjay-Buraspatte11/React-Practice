import React, { useState } from "react";
import _default from "react-redux/es/components/connect";
import "./Form.css";

import axios from "axios";
const Form = () => {
  //   const [user, setUser] = useState({name: "", username: "",email: "",phoneNo: ""});
  const [formData, setUser] = useState({
    user: { name: "", username: "", email: "", phoneNo: "" },
    validationMsg: { name: "", username: "", email: "", phoneNo: "" },
  });
  const handleInput = (e) => {
    // let id=e.target.id;
    // let value=e.target.value;
    let { id, value } = e.target;
    let msg = "";
    switch (id) {
      case "name":
        msg =
          value.length === 0
            ? "Name is madatory"
            : value.length < 3
            ? "Name must have at least 3 charector"
            : "";
        break;
      default:
        break;
    }
    // setUser({...user,[id]:value})
    setUser({
      ...formData,
      validationMsg: { ...formData.validationMsg, [id]: msg },
      user: { ...formData.user, [id]: value },
    });
    console.log(formData);
    // setUser({...formData,user:{...formData.user,[id]:value}})
  };
  const validateForm = () => {
    let valid = true;
    Object.values(formData.validationMsg).forEach((key) => {
      if (key.length !== 0) 
        valid = false;
    })
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
     axios.post('https://jsonplaceholder.typicode.com/users',formData.user).then(resp=>{
        // console.log("Data Submitted'+resp)
        console.log("Data submitted"+resp.data);
     })
    } else {
      console.log("Invalid Form...");
    }
    // console.log(formData);
  };
  return (
    <div className="container-box">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={handleInput}
          />
        </div>
        {
            formData.validationMsg.name.length!==0 ? <div className="alert alert-danger">{formData.validationMsg.name}</div> :""
        }
        <br />
        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label htmlFor="">UserName: </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your UserName"
            className="form-control"
            onChange={handleInput}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="form-control"
            onChange={handleInput}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "10px" }}>
          <label htmlFor="">Enter Phone: </label>
          <input
            type="number"
            id="phoneNo"
            placeholder="Enter Your Phone No"
            className="form-control"
            onChange={handleInput}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "10px" }}>
          <button className="btn btn-outline-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
