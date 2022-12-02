import React from "react";
import "./contact.css";
function Contact(props) {
  let title = props.gender === "M" ? "Mr." : "Miss.";
  return (
    <div className="contact-card">
      <h2>  {title} Name: {props.name}</h2>
      <hr />
      <div>
        {props.contactNo ? <h3>ContactNo: {props.contactNo}</h3> : ""}

        {props.email ? <h3>Email: {props.email}</h3> : ""}
        {<h3>Gender: {props.gender}</h3>}
        {/* <input type="checkbox" checked={props.contacted} /> */}
      </div>
      <input type="checkbox" checked={ props.contacted}/>Contacted
    </div>
  );
}

export default Contact;
