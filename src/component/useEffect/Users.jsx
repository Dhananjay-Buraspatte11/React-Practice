import React from 'react'
import { useState } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import{Link } from 'react-router-dom';

const Users = () => {
    const [user,getUsers]=useState([])
    const BASE_URL="https://jsonplaceholder.typicode.com/"
    const loadUsers=(id)=>{
       axios.get(BASE_URL+"users/"+id).then(response=>{
        console.log(response.data);
        getUsers(response.data)
       })
    }
    const {id}=useParams()
    useEffect(()=>{
        loadUsers(id)
    })
  return (
    
    <div>
        <br /><br /><hr />
      {/* <button onClick={loadUsers}>load data</button> */}
      {
        user.map(e=>
           
                
                 <li key={e.id}><Link to={'/user/'+e.id}>{e.name}</Link></li>

                // {/* <h5>Name:{e.name}</h5> */}
            
            )
        
      }
    </div>
  )
}

export default Users;
