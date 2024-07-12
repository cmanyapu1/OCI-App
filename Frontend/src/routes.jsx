import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Homes from "./home";
import LoginForm from "./login";
// import Profileform from "./profile";
import SignupForm from "./signup";
import PrivateRoute from "./privateroute";
import Passportlist from "./Passport/list";
import PassportCard from "./Passport/passportcard";
import Uploadpic from "./Passport/upload";
import Uploadfirm from  "./Passport/passportform";

function RoutesR({login, signup, homes}) { 
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
);
    return (
        <Routes>
        <Route  path="/" 
          element={<Homes homes={homes}/>}
        />
             <Route
         path="/Passport/:id" 
          element={ 
          <PrivateRoute> 
            <PassportCard />
          </PrivateRoute>
          }
          />
                <Route
         path="/Upload" 
          element={ 
          <PrivateRoute> 
        <Uploadpic />
          </PrivateRoute>
          }
          />
                        <Route
         path="/UploadForm" 
          element={ 
          <PrivateRoute> 
        <UploadForm />
          </PrivateRoute>
          }
          />
       
       <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    )
}


export default RoutesR;