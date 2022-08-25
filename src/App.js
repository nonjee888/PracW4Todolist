import React from "react";
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>  
      <Routes>
        <Route path="/" element={<Home/>}exact/>
        <Route path="/detail/:id"  element={<Detail/>}exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
