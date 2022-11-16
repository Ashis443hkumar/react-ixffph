import React from "react";
import "./style.css";
import Header from "./components/common/Header"
import Footer from "./components/common/footer/Footer"
import Home from './components/pages/home/Home';
import Login from "./components/login/Login"
import Profile from "./components/login/Profile"

import {BrowserRouter, Routes,Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
          <Home/>
          <Footer/>
         
      </BrowserRouter>

    </div>
  );
}
