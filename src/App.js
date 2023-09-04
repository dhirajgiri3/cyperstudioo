import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Hero2 from "./Components/HomeComponent/Hero2";
import CyperCase from "./Pages/Cases/CyperCase";
import Information from "./Components/CyperCaseComponent/Information";
import { LayoutGroup } from "framer-motion";
import Ask from "./Components/Common/Header/Pc/Ask";
import Service from "./Pages/Services/Service";

function App() {
  return (
    <div>
      <LayoutGroup id="a" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cases/cypercase" element={<CyperCase />} />
            <Route path="/info" element={<Information />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </LayoutGroup>
    </div>
  );
}

export default App;
