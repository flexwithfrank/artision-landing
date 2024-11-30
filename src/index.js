import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact from "./Contact";
import About from "./About";
import TeamMembers from "./TeamMembers";
import Solutions from "./Solutions";
import "tw-elements";
import Careers from "./Careers";
import Services from "./services/services";
import Privacy from "./privacy/privacy";
import Terms from "./terms/terms";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teammembers" element={<TeamMembers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
