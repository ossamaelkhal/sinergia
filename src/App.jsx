import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import "./styles/App.css";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
