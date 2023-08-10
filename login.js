import {useState,useRef, useEffect} from "react";
import { collection,  getDocs} from "firebase/firestore";

import {db} from "../firebaseinit";
export function Login(){
    const [state,setState]=useState([]);
    const [loggedin,setLoggedin]=useState(null);
    const userInput=useRef();
    const passInput=useRef();
    const getData = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
       setState(users);
    }
    useEffect(()=>{
        getData();
    },[]);    
    
    const handler=(e)=>{
        e.preventDefault();
        const user=userInput.current.value;
        const pass=passInput.current.value;
        const users={
            username:user,
            password:pass
        }
        const u=state.filter((user)=>(user.username === users.user && user.password === users.password))
        if(u){
            setLoggedin("true");
        }
        console.log(loggedin);
    }
    return(
      <>
      {loggedin?<form onSubmit={handler}>
            <div className="container">
                <label>userName</label>
                <input type="text" placeholder="email" required on ref={userInput}></input>
                <label>password</label>
                <input type="password" placeholder="passwoed" required ref={passInput}></input>
                <button className="button">login</button>
            </div>
        </form>:<h1>hello</h1>
      }
       
        
      </>
           
      
       
        
        
       
    )
}