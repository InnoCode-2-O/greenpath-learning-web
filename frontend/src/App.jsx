import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={<Home />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
