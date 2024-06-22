import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PassportCard from "./paassportcard"
import InternalApi from "../../api";


function Passportlist() {
  const [passports, setPassport] = useState(null);


  async function search(name) {
    let passports = await InternalApi.getPassports(name);
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