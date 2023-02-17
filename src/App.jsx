import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Attractions from "./Attractions";
import AttractionDetail from "./AttractionDetail";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Attractions/>}/> 
      <Route exact path="/attraction/:id" element={<AttractionDetail/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
