import React from "react";
import "./Header.css"

import { Link } from 'react-router-dom';
// import NameState from './../Name-State/NameState';

let appName='React-app'
const Header=()=>{
    return(
        <div>
        <h1 className="heading">Welcome to first {appName}</h1>
        <hr />
        <Link to="/user/id">User</Link> |
        <Link to="/counter">Counter</Link> | 
        <Link to="/NameState">nameState</Link> |
        <Link to="/ContactTable">contactTable</Link> |
        <Link to="/context">Context</Link> |
        <Link to="/redux">Redux</Link> |
        <Link to="/form">Form</Link> |
        </div>
    )
}
export default Header;