import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import MyMintings from "./components/MyMints";
import Minting from "./components/Minting";

function App(props) {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main {...props} />} />
          <Route path="/minting" element={<Minting {...props} />} />
          <Route path="/mymints" element={<MyMintings {...props} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
