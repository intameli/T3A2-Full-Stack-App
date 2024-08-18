import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { TutorList } from "./components/TutorList";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TutorList />} />
        <Route path="/login" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
