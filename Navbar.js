import {Link,Outlet} from "react-router-dom";
export function Navbar(){
   
   return(<>
    <div className="nav">
        <Link to="login">login</Link>
        <Link to="signup">sign-up</Link>
    </div>
    <Outlet />
    </>)
}