import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom'; // Import Redirect and Link



function PassportCard({name, description, logoUrl, handle}) { //name, description, logoUrl, handle
    if (!passport) return <Navigate to="/"/>

  return (
    <Link to={`"/passport/${handle}"`}>
  <div>
      <h1>{name} </h1>
      <p>{description}</p>
      <img src = {logoUrl}></img>
    </div>      </Link>
  );
}

export default PassportCard;