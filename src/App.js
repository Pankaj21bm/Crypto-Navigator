import React from "react";
import CryptoDashBoard from "./components/CryptoDashBoard.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<CryptoDashBoard crypto="bitcoin" />} />
        <Route path="/bitcoin" element={<CryptoDashBoard crypto="bitcoin" />} />
        <Route path="/ethereum" element={<CryptoDashBoard crypto="ethereum" />} />
        <Route path="/polkadot" element={<CryptoDashBoard crypto="polkadot" />} />
        <Route path="/cardano" element={<CryptoDashBoard crypto="cardano" />} />
        <Route path="/ripple" element={<CryptoDashBoard crypto="ripple" />} />
        <Route path="/litecoin" element={<CryptoDashBoard crypto="litecoin" />} />
        <Route path="/dogecoin" element={<CryptoDashBoard crypto="dogecoin" />} />
      </Routes>
  );
};

export default App;
