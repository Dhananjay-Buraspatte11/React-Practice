import axios from "axios";
import { increamentNumber } from './ActionCreator';
const AsyncTask=()=>{
    let num=0
    const url='https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new';
     return dispatch=>{

     
    axios.get(url).then(response=>{
         num= response.data;
         console.log(num);
         dispatch(increamentNumber(num));
    }).catch(error=>{
        console.log(error);
    })
}
}
export  {AsyncTask}