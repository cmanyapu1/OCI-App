import React, { useState, useEffect } from "react";
import axios from "axios";
import PassportCard from "./passportcard"
import InternalApi from "../../api";
import { Link } from "react-router-dom";



function Passportlist(user) {
  const [passports, setPassport] = useState(null);


  async function search(user) {
    let passports = await InternalApi.getPassports(user); //need help fixing this api
    setPassport(passports);
  }


  return (

    <div className="Passportlist"> 
      {passports.map(c => (
              <PassportCard key={c.name}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}/>
      ))}
     </div>
  )
      }

export default Passportlist;