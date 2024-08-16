import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { TutorList } from "./components/TutorList";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TutorList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
