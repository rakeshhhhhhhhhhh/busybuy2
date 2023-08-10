import { collection, addDoc} from "firebase/firestore";
import {useState,useRef} from "react"; 
import {db} from "../firebaseinit";
export function Signup(){
    const userInput=useRef();
    const passInput=useRef();
    const addUser=async (user)=>{

        const userRef=collection(db,"users");
        const docRef = await addDoc(userRef, user);
      
       }
    const handler=(e)=>{
        e.preventDefault();
        const user=userInput.current.value;
        const pass=passInput.current.value;
        const users={
            username:user,
            password:pass
        }
        
      addUser(users);

    }
    return(
    
        <form onSubmit={handler}> 
            <div className="container">
                <label>userName</label>
                <input type="text" placeholder="email" required ref={userInput}></input>
                <label>password</label>
                <input type="password" placeholder="passwoed" required ref={passInput}></input>
                <button className="button">sign-up</button>
            </div>
        </form>
    )
}