import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultProps from "./defaultProps"
import PassportCard from "./paassportcard"

function Passportlist() {
  const [passports, sePassport] = useState(null);


  async function search() {
    let passports = await InternalApi.getPassports(name);
    sePassport(companies);
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