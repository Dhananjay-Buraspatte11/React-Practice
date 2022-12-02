import React,{useState} from 'react'
import SenderChild from '../sender-child/SenderChild'


const Parent = () => {
const [val,getVal]=useState("")

    const getValue=(e)=>{
     getVal(e)
    }
  return (
    <div>
        <br /><hr />
       <h2>Value from child: {val}</h2>
      <SenderChild name="" onSend={getValue}></SenderChild>
    </div>
  )
}

export default Parent
