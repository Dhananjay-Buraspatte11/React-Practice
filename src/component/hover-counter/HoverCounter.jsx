import React,{useState} from 'react'

const HoverCounter = (props) => {
  const [num,setNum]=useState(0)
  const increamentNum=()=>{
     setNum(num+1)
  }
  return (
    <div>
      <h2>Count: {num}</h2>
       <h3 onMouseOver={increamentNum}>React onMouseHover</h3>
       <h3 onMouseOver={props.increamentCount}>count:{props.count}</h3>
    </div>
  )
}

export default HoverCounter