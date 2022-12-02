import React,{useState} from "react";
// import contactList from './component/Contact-Table/ContactList'
import Contact from "./component/contact/Contact";
import Header from "./component/header/Header";
import ContactTable from "./component/Contact-Table/ContactTable";
// import ClickCounter from "./component/click-counter/ClickCounter";
import NameState from "./component/Name-State/NameState";
// import ArrayState from "./component/Array-State/ArrayState";
// import Parent from "./component/parent/Parent";
import HoverCounter from "./component/hover-counter/HoverCounter";
import User from "./component/user/User";
import Users from "./component/useEffect/Users";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserContext from "./component/context/UserContext";
import ContextComp from "./context-comp/ContextComp";
import ReduxComp from "./redux-comp/ReduxComp";
import Form from "./component/Form/Form";

function App(){

  const [data,setData]=useState({userName:"dsburaspatte",userCount:0})

  const updateData=(key,value)=>{
    setData({
      ...data,
      [key]:value
    })
  }
  return(
    <>
    {/* <Header></Header> */}
    <Contact name="Dhananjay-Buraspatte" email="dsburaspatte@mitaoe.ac.in" contactNo='8788491050' gender='M'></Contact>
    <Contact name="Aditi-patil" email="adpatil@mitaoe.ac.in" gender='F'></Contact>
    <Contact name="pramod-pachpule"  contactNo='899991050' gender='M'></Contact>
    <hr></hr>
    {/* <ContactTable></ContactTable> */}
    {/* <ContactList></ContactList> */}



    {/* <ClickCounter></ClickCounter>
   <NameState></NameState>
   <ArrayState></ArrayState>
 <Parent></Parent>
 <HoverCounter></HoverCounter>
 <User></User>
 <Users></Users> */}

<BrowserRouter>
<Header></Header>
<UserContext.Provider value={{getData:data,setData:updateData}}>
<Routes>
  
  <Route path="/user" element={<Users></Users>}></Route>
  <Route path="/user/:id" element={<User></User>}></Route>
  <Route path="/counter" element={<HoverCounter></HoverCounter>}></Route>
  <Route path="/NameState" element={<NameState></NameState>}></Route>
  <Route path="/ContactTable" element={<ContactTable></ContactTable>}></Route>
  <Route path="/context" element={<ContextComp></ContextComp>}></Route>
  <Route path="/redux" element={<ReduxComp></ReduxComp>}></Route>
  <Route path="/form" element={<Form></Form>}></Route>
 
</Routes>
</UserContext.Provider>
</BrowserRouter>
 
    </>
  )
}
export default App;