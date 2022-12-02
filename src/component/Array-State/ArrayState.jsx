import React,{useState} from 'react'

const ArrayState = () => {
    const[data,setData]=useState({num:0,arr:[]})

    const add5Num=()=>{
        setData(prev=>{
            data.num=prev.num+1;
            data.arr=prev.arr.concat(data.num)
            return {...data}
        })
    }
  return (
    <div>
        <br /><hr /><br />
      <button onClick={add5Num}>Click Me</button>
      <h2>Num:{data.num}</h2>
      <h3>Arr: {data.arr}</h3>

      <ul>
        {
           data.arr.map(e=>
            <li>{e}</li>)
        }
      </ul>
    </div>
  )
}

export default ArrayState
