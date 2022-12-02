import React from 'react'

const SenderChild = (props) => {
  return (
    <div>
    
      <button onClick={()=>props.onSend("This message is sent from child to parent")}>Send Data To Parent</button>
    
    </div>
  )
}

export default SenderChild
