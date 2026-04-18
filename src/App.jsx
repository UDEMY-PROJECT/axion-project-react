import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ams from "./pages/Aws";
import Subscribe from "./pages/Subscribe";
import WebDev from "./pages/WebDev";
import ComparePlans from "./pages/ComparePlans";
import "./App.css"
import FooterLinks from "./components/FooterLinks";
import FooterBottom from "./components/FooterBottom";

import Login from "./pages/Login"; 

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/compare-plans";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ams" element={<Ams />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/webdev" element={<WebDev />} />
        <Route path="/compare-plans" element={<ComparePlans />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>

      <FooterLinks />
      <FooterBottom />
    </>
  );
};

export default App;