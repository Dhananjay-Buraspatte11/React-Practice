import React,{useState} from 'react'

const NameState = () => {
    const[name,setName]=useState({firstName:"",lastName:""})
  return (
    <div>
        <h2>First-Name: {name.firstName} , LastName:{name.lastName}</h2>
     <input type="text" placeholder='Enter Your FirstName' onChange={e=>setName({...name,firstName:e.target.value})} />
     <input type="text" placeholder='Enter Your LastName' onChange={e=>setName({...name,lastName:e.target.value})} />
    </div>
  )
}

export default NameState
