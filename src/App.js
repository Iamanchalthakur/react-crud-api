//import React, { Component } from "react";
//import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import UserData from "./components/user.component";
import Login from "./components/sign-in.component";


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/tutorials"} className="navbar-brand">
        bezKoder
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/user"} className="nav-link">
            User
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/Sign"} className="nav-link">
            Sign In
          </Link>
        </li>

      </div>
    </nav>

    <div className="container mt-3">

    <div className="container mt-3">

     
          <Routes>
            <Route path="/" element={<TutorialsList/>} />
            <Route path="/tutorials" element={<TutorialsList user={user} />} />
            <Route path="/add" element={<AddTutorial/>} />
            <Route path="/user" element={<UserData/>} />
            <Route path="/sign" element={<Login/>} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/tutorials/:id" element={<Tutorial/>} />
          </Routes>
        </div>
        </div>
        </div>
  );
};

export default App;
