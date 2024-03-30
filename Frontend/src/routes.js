import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import home from "../home";
import LoginForm from "../loginform";
import Profileform from "../profile";
import SignupForm from "../SignupForm";
import PrivateRoute from "./privateroute";

function Routes({login, signup}) { 
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
);
    return (
        <Switch>
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
        <PrivateRoute exact path="/profile" >
        <ProfileForm />
        </PrivateRoute>
        <Redirect to="/" />

      </Switch>
    )
}


export default Routes;