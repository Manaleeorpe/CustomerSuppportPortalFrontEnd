import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState , useContext} from "react";
import { TokenContext } from "../../TokenContext";


function CustomerDashboard() {
    const { userData } = useContext(TokenContext);
  return (
  <div>
     <h1>Customer Dashboard</h1>
     <h2>Welcome, {userData && userData.username}</h2>
  </div>
  );
}

export default CustomerDashboard;
