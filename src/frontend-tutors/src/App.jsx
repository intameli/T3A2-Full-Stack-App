import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { TutorList } from "./components/TutorList";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { SignUp } from "./components/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TutorList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
