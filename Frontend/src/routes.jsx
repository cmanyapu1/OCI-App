import React, { useState, useEffect } from "react";
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
        <Route exact path="/home" >
          <Homes homes={homes}/>
        </Route>
        <PrivateRoute exact path="/Passport/list" >
          <Passportlist/> 
        </PrivateRoute>
        <PrivateRoute exact path="/Passport/paassportcard">
            <PassportCard />
          </PrivateRoute>
        <PrivateRoute exact path="/Passport/upload" >
        <Uploadpic />
        </PrivateRoute>
        <Route exact path="/login" >
        <LoginForm login={login} />
        </Route>
        <Route exact path="/signup" >
        <SignupForm signup={signup} />
        </Route>
        <Navigate to="/" />

      </Routes>
    )
}


export default RoutesR;