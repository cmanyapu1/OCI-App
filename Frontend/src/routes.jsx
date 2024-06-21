import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import home from "./home";
import LoginForm from "./login";
// import Profileform from "./profile";
import SignupForm from "./signup";
import PrivateRoute from "./privateroute";

function RoutesR({login, signup}) { 
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
);
    return (
        <Routes>
        <Route exact path="/" >
          <home/>
        </Route>
        <PrivateRoute exact path="/companies" >
          <Companylist/> 
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
          </PrivateRoute>
        <PrivateRoute exact path="/jobs" >
        <JobList />
        </PrivateRoute>
        <Route exact path="/login" >
        <LoginForm login={login} />
        </Route>
        <Route exact path="/signup" >
        <SignupForm signup={signup} />
        </Route>
        {/* <PrivateRoute exact path="/profile" >
        <ProfileForm />
        </PrivateRoute> */}
        <Navigate to="/" />

      </Routes>
    )
}


export default RoutesR;