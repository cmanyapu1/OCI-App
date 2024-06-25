import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import NavBar from "./navbar";
import RoutesR from "./routes";
import InternalApi from "../api";
import UserContext from "./usercontext";
console.log('import jwt')
import jwt from "jsonwebtoken";
console.log('after the import')

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {

    const [infoLoaded, setInfoLoaded] = useState(false);
    const [uploads, setUploads] = useState(new Set([]));
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  
    console.debug(
        "App",
        "infoLoaded=", infoLoaded,
        "currentUser=", currentUser,
        "token=", token,
    );
  
    useEffect(function loadUserInfo() {
        console.debug("App useEffect loadUserInfo", "token=", token);
    
        async function getCurrentUser() {
          if (token) {
            try {
              console.log("befor jwt decode");
              let { username } = jwt.decode(token);
              console.log("after jwt decode");
              // put the token on the Api class so it can use it to call the API.
              InternalApi.token = token;
              let currentUser = await InternalApi.getCurrentUser(username);
              setCurrentUser(currentUser);
              setUploads(new Set(currentUser.passportinfo));
            } catch (err) {
              console.error("App loadUserInfo: problem loading", err);
              setCurrentUser(null);
            }
          }
          setInfoLoaded(true);
        }
    
        setInfoLoaded(false);
        getCurrentUser();
      }, [token]);
    
      function logout() {
        setCurrentUser(null);
        setToken(null);
      }

      async function signup(signupData) {
        try {
          let token = await InternalApi.signup(signupData);
          setToken(token);
          return { success: true };
        } catch (errors) {
          console.error("signup failed", errors);
          return { success: false, errors };
        }
      }

      async function login(loginData) {
        try {
          let token = await InternalApi.login(loginData);
          setToken(token);
          return { success: true };
        } catch (errors) {
          console.error("login failed", errors);
          return { success: false, errors };
        }
      }

      function hasUploadedpassport(id) {
        return uploads.has(id); //what is had
      }
    
      function uploadpassport(id) {
        if (hasUploadedpassport(id)) return;
        InternalApi.savePasssport(currentUser.email, id);
        setUploads(new Set([...setUploads, id]));
      }
      return (
        // <BrowserRouter>
          <UserContext.Provider
              value={{ currentUser, setCurrentUser, hasUploadedpassport, uploadpassport }}>
            <div className="App">
              <NavBar logout={logout} />
              <RoutesR login={login} signup={signup} />
            </div>
          </UserContext.Provider>
        // </BrowserRouter>
    );
    } 

    export default App;