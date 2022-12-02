import React, {useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
const User = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com/";
  const [users, getUsers] = useState([]);
  const loadUsers = () => {
    axios.get(BASE_URL + "users").then((response) => {
      console.log(response.data);
      getUsers(response.data);
    });
  };
  
  return (
    <div>
      <button onClick={loadUsers}>load-Users</button>
      {users.map(value => 
      <li key={value.id}><Link to={'/user/'+value.id}>{value.name}</Link></li>

    
        // return (
        //   <>
        //     <ul key={value.id}>
             
        //       <Link to={'/user/' +value.id}><h3 >Name: {value.name}</h3></Link>
              
        //       {/* <h4>userName: {value.username}</h4>
        //       <h4>Email: {value.email}</h4>
        //       <h4>Phone_No: {value.phone}</h4> */}
             
        //     </ul>
        //   </>

        // );
      )}
    </div>
  );
};

export default User;
