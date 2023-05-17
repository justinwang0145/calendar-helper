import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
