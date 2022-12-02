import React from 'react'
import UserContext from '../component/context/UserContext'
import {useContext} from 'react'
// import User from './../component/user/User';



const ContextComp = () => {

    let value =useContext(UserContext)
  return (
    <div>
        <h3>Context value is :{value.getData.userName}</h3>
        <h3>COUNT:{value.getData.userCount}</h3>
        <button onClick={()=>value.setData("userCount",value.getData.userCount+1)}>INCREAMENT</button>
    </div>
  )
}

export default ContextComp
