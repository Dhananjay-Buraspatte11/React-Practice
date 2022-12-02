import React from 'react'

const WithCounter = (comp) => {
    const newComp=(props)=>{
        const [count,setCount]=useState(0)
        const increamentCount=()=>{
            setCount(count+1)
        }
    
   
  return (
    <div>WithCounter
        <br /><br />
        <comp {...props} count={count} increament={increamentCount}></comp>
    </div>
  )
}

return newComp;
}
export default WithCounter