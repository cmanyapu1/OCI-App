import React from "react";
import { Link } from 'react-router-dom';
import UserContext from "./usercontext";


function Home() {
  const { currentuser } = useContext(UserContext);

  return (
    <div className="Homepage">

      <p>OCI App</p>
      <p>Upload your passport here</p>
      {currentuser ? (
      <p> Welcome back {currentuser.email}</p>
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

export default Home;