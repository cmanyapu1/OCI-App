import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
  const handlelogic = () => {window.open("https://localhost:5173/auth/google", '_self')}; 

  return (
    <div> 
      <button onClick = {handlelogic} >Sign up / Log in</button>
</div>
  );
}



   

    export default App;