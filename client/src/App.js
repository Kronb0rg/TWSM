import "./App.css";
import Home from "./pages/Home";
import Navbar from "./parts/Navbar";
import About from "./pages/About";
import NewProduct from "./pages/NewProduct";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  useEffect(() => {
    document.title = "ReviewHub";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/newProduct" element={<NewProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
