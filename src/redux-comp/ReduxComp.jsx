
import { connect } from "react-redux";
import {useState} from "react";
import { decreamentNumber, increamentNumber, checkChange, setUserName } from './../Redux/ActionCreator';
import { AsyncTask } from "../Redux/AsyncTask";

const ReduxComp = (props) => {
  const [userName,setUserName]=useState('')
  return (
    <div>
      <h2>UserName: {props.name}</h2>
      <h3>NUM: {props.num}</h3>

      <input type="text"  placeholder="Number to add" value={userName} onChange={(e)=>setUserName(e.target.value)} />

     <button onClick={()=>props.setUserName(userName)}>set user</button>

      <button onClick={props.onIncreamentNum}>Increament</button>
      <button onClick={props.onDecreamentNum}>Decreament</button>
      <input type="checkbox" checked={props.checked} onChange={props.onCheckChange} />
      Checked
      <button props={props.onCheckedChange}>Checkes-Change</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    checked: state.checked,
    num: state.count,
    name:state.userName
  };
};

const mapDispatchToProps =(dispatch)=>{
  return{
    onIncreamentNum:()=>dispatch(AsyncTask()),
    onDecreamentNum:()=>dispatch(decreamentNumber(2)),
    onCheckChange:()=>dispatch(checkChange()),
    setUserName:(payload)=>dispatch(setUserName(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxComp);
