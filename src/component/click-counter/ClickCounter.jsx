import React, { useState } from 'react'

const ClickCounter = () => {
    const [num,setNum]=useState(0)
    const nums=[1,2,3,4,5]
    const add5Nums=()=>{
    for (let i=0;i<=nums.length;i++){
      setNum(num+nums[i])
    }
    }
  return (
    <div>
        <h1>Hi......</h1>
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>Increament By 1</button>
        <button onClick={()=>setNum(num-1)}>Decreament By 1</button>
        <button onClick={()=>setNum(0)}>Reset</button>
        <button onClick={add5Nums}>Add Multiple Numbers</button>
    </div>
  )
}

export default ClickCounter