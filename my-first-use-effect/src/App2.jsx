import React, { useState, useEffect} from "react";
import "./styles.css";
import BlogSection from "./components/BlogSection";
import Login from "./components/Login";

function App2 () {

  //call "user" constant and function to set this const "useState"
const [user, setUser] = useState("");

//call handleLogin method with "userName" parameter
//setUser get userName Value to user
const handleLogin = (userName) => {
  setUser(userName);
}
//call handlelogout method with no parameter
//set User get a new "value" null to user
const handleLogout = () => {
  setUser()
}
     
//equal to componentDidMount
//please keep it mine to ass [user] array after the CL to stop writting CL
useEffect(() => {
  console.log(`user has changed`);
},[user]);

    return (
        <div className="App">
          {user ? (
            <BlogSection user={user} onLogout={handleLogout} />
          ) : (
            <>
              <Login onSubmit={handleLogin} />
            </>
          )}
        </div>
      );
    }

export default App2;
