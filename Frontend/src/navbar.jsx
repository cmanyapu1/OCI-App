import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./usercontext";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ logout }) { //what does logout here do
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  let this_should_be_logged_in = (   
  <ul><Navbar expand="md">
  {/* <li> <NavLink exact to="/" className="navbar-brand"> */}
  <li> <NavLink exact to="/">
   Home       
   </NavLink>
   </li>
   <Nav className="ml-auto" navbar>
         </Nav>
   <li className="nav-item">
       {/* <Link className="nav-link" to="/" onClick={logout}> */}
       <Link to="/" onClick={logout}>
         {/* Log out {currentUser.first_name || currentUser.username} */}
       </Link>
     </li>
 </Navbar>
 </ul>)

  function loggedInNav() {
  return (
    <div>
      <p>Logged in</p>

      
    </div>
  );
}

let logged_out_stuff = (      <ul className="navbar-nav ml-auto">
<li className="nav-item mr-4">
  {/* <NavLink className="nav-link" to="/login"> */}
  <NavLink to="/login">
    Login
  </NavLink>
</li>
<li className="nav-item mr-4">
  {/* <NavLink className="nav-link" to="/signup"> */}
  <NavLink to="/signup">
    Sign Up
  </NavLink>
</li>
</ul>)
function loggedOutNav() {
  return (
    <div>
      <p>Logged out</p>

      
    </div>
  );
}

return (
    // <nav className="Navigation navbar navbar-expand-md">
    <nav >
      {/* <Link className="navbar-brand" to="/"> */}
      <Link to="/">
        Home
      </Link>
      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
);
}

export default NavBar;