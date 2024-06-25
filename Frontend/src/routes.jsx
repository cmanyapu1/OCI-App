import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Homes from "./home";
import LoginForm from "./login";
// import Profileform from "./profile";
import SignupForm from "./signup";
import PrivateRoute from "./privateroute";
import Passportlist from "./Passport/list";
import PassportCard from "./Passport/paassportcard";
import Uploadpic from "./Passport/upload";

function RoutesR({login, signup, homes}) { 
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
);
    return (
        <Routes>
        <Route  path="/home" 
          element={<Homes homes={homes}/>}
        />
        <Route
         path="/Passport/list" 
          element={ 
          <PrivateRoute> 
            <Passportlist/>
          </PrivateRoute>
          }
          />
             <Route
         path="/Passport/paassportcard" 
          element={ 
          <PrivateRoute> 
            <PassportCard />
          </PrivateRoute>
          }
          />
                <Route
         path="/Passport/upload" 
          element={ 
          <PrivateRoute> 
        <Uploadpic />
          </PrivateRoute>
          }
          />
       
       <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        
        <Route path="*" element={<Navigate to="/home" />} />

      </Routes>
    )
}


export default RoutesR;