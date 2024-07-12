import React, { useContext } from 'react';
import UserContext from "./usercontext";
import { Link, NavLink } from "react-router-dom";
import Passportlist from './list'

function Homes() {
  const { currentuser } = useContext(UserContext);

  return (
    <div className="Homepage">

      <h1>OCI Application Assistant</h1>
      {currentuser ? (
        <>
      <h2> Welcome back {currentuser.email}</h2>
      <Link to="/upload">
      <button>Upload new ID</button>
      </Link>
   
      <p>Passport List</p>
      <Passportlist user = {currentuser}/>
       </>
       ) : ( 
      <p>
        <Link to="/login">
          <button>Log in </button>
            </Link>
            <Link to="/signup"><button>Sign up </button>
            </Link>
            </p>
            )}
            </div>

  );
}

export default Homes;




