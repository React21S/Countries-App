import './App_F.css';
import { useState} from "react";
import {db} from "./firebase.config-2";
import {collection, addDoc} from "firebase/firestore"

function AppF() {
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [Address, setAddress]= useState("");
  const [postCode, setPostCode]= useState("");
  const [phone, setPhone]= useState("");
  const [Email, setEmail]= useState("");
  const [message, setMessage]= useState("");
  
  const usersCollectionRef = collection(db,"users_2");

// Create new users function 
  const createUser = async()=>{
    await addDoc(usersCollectionRef, {firstName:firstName, lastName:lastName, Address:Address, postCode:Number(postCode), phone:phone, Email:Email, message:message});
    window.location.reload();
  }


  const popUpHandler = (ev)=>{
    ev.preventDefault();
    window.location.reload();
  }
  
  return (
    <div className="App_F" submit={popUpHandler}>
      {/*input new  users function  */}
      <div>
        <label htmlFor="firstName"> First Name</label>
        <input id="firstName" name="firstName" placeholder="First Name..." required  onChange={(event)=>{
          setFirstName(event.target.value)
        }}/>
      </div>
      <div>
         <label htmlFor="lastName"> Last Name</label>
         <input id="lastName" name="lastName" placeholder="Last Name..." required  onChange={(event)=>{
          setLastName(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="address">Address</label>
          <input id="address" name="address" placeholder="Address..." required  onChange={(event)=>{
          setAddress(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="postcode"> Post Code</label>
         <input type="number" id="postcode" name="postcode" placeholder="Post code..." required  onChange={(event)=>{
          setPostCode(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="phoneNumber"> Phone Number</label>
          <input id="phoneNumber" name="phoneNumber" placeholder="Phone number..." required  onChange={(event)=>{
          setPhone(event.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="Email"> Email</label>
          <input id="Email" name="Email" placeholder="Email..." required  onChange={(event)=>{
          setEmail(event.target.value)
        }}/>
      </div>

      <div>
        <label htmlFor="message"> Message</label>
          <textarea  id="message" name="message" placeholder="write your message here..." onChange={(event)=>{
          setMessage(event.target.value)
        }}></textarea>
      </div>
      

      <button type="submit" value="Submit" onClick={createUser}>submit</button>

    </div>
  );
}

export default AppF;
