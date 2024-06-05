import React, { useState } from "react";
import UserDataService from "../services/user.service";
import { useNavigate } from "react-router-dom";


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginData = { email, password };
      const token = await UserDataService.login(loginData);
      console.log("Logged in successfully, token:", token.status);
      localStorage.setItem("token", token);
     
      setError("");
      console.log("testing====1232");
      
      navigate("/tutorials")
      if (token.status === 200) {
        alert("Im logged in====");       
      }
    } catch (error) {
      console.log("inside catch");
      console.error("Error logging in=========:", error);
      setError("Invalid Login");
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    </div>
  );
};

export default Login;

