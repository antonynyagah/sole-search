import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import ShoePage from "./Routes/ShoePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Sole Search</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShoePage/:id" element={<ShoePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
