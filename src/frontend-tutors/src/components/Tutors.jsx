import { useState, useEffect } from "react";
import { Subjects } from "./TutorPage";
import { useNavigate } from "react-router-dom";

export function Tutors() {
  const nav = useNavigate();

  function handleClick(id) {
    nav(`/tutor/${id}`);
  }
  return (
    <>
      <div className="tutor-header">
        <h3>All Tutors</h3>
        <h4 className="sort">Sort/Filter options</h4>
      </div>
      <TutorCards handleClick={handleClick} />
    </>
  );
}

export function TutorCards({ handleClick }) {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    async function fetchTutors() {
      const response = await fetch("http://127.0.0.1:8000/api/tutor");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTutors(data);
    }
    fetchTutors();
  }, []);

  return (
    <div className="card-container">
      {tutors.map((tutor) => {
        return (
          <TutorCard key={tutor._id} tutor={tutor} handleClick={handleClick} />
        );
      })}
    </div>
  );
}

function TutorCard({ tutor, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(tutor._id)}>
      <h3>{tutor.name}</h3>
      <h2 className="rate">${tutor.rate}/hr</h2>
      <Subjects subjects={tutor.subjects} />
    </div>
  );
}
