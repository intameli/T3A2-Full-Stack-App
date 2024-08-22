import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Tutors } from "./components/Tutors";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { SignUp } from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { TutorPage } from "./components/TutorPage";
import { TutorEdit } from "./components/TutorEdit";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user");
  });

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Tutors />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile setUser={setUser} />} />
        <Route path="/tutor/:id" element={<TutorPage />} />
        <Route path="/dashboard/:id" element={<TutorEdit />} />
      </Routes>
    </>
  );
}

export default App;
