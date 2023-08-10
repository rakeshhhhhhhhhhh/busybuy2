
import './App.css';
import {useState} from "react";
import { Navbar } from './components/Navbar';
import { Login } from './components/login';
import { Signup } from './components/signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  

 const router=createBrowserRouter([
  {path:"/",element:<Navbar/>,children:[
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Signup />}
  ]}
 ]
  



 )
 
  return (
    <>
    <RouterProvider router={router} />
    </>
   
  );
}

export default App;
