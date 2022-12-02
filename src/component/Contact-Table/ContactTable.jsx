import React from 'react'
import ContactList from './../data/ContactList';
import Context from '../context/UserContext';
import {useContext} from 'react'
const ContactTable = () => {
    let result = ContactList.map(c=>
        <tr key={c.id}>
            <td>Name: {c.Name}</td>
            <td>Email: {c.Email}</td>
            <td>PhoneNo: {c.PhoneNo}</td>
            {/* <td>Contacted: {c.Contacted}</td> */}
            {c.contacted}
        </tr>
        )

        let contextVal=useContext(Context)
  return (
    <div>
        <h3>{contextVal.getData.userName}</h3>
        <h3>{contextVal.getData.userCount}</h3>
        <table border={2}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>ContactNo</th>
                </tr>
               
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>
    </div>
  )
}

export default ContactTable