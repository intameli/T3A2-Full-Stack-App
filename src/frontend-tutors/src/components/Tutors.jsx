import { useState, useEffect } from "react";
import { Subjects } from "./TutorPage";
import { EditSubjects } from "./TutorEdit";
import { useNavigate, useLocation } from "react-router-dom";

export function Tutors() {
  const nav = useNavigate();

  function handleClick(id) {
    nav(`/tutor/${id}`);
  }
  return (
    <>
      <div className="tutor-header">
        <h3>All Tutors</h3>
        <Filter startingPath="/" />
      </div>
      <TutorCards handleClick={handleClick} />
    </>
  );
}

export function TutorCards({ handleClick }) {
  const [tutors, setTutors] = useState([]);
  const location = useLocation();
  const queryString = location.search;

  useEffect(() => {
    async function fetchTutors() {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tutor${queryString}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTutors(data);
    }
    fetchTutors();
  }, [location.search]);

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

export function Filter({ startingPath }) {
  const [showFilter, setShowFilter] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const nav = useNavigate();

  function apply() {
    if (subjects.length) {
      let path = startingPath + "?";
      for (const [index, subject] of subjects.entries()) {
        if (index) path += "&";
        path += `subject=${subject}`;
      }
      nav(path);
    } else {
      nav(startingPath);
    }
  }

  return (
    <div className="sort">
      <button onClick={() => setShowFilter(!showFilter)}>
        Filter by subjects
      </button>
      {showFilter && (
        <>
          <EditSubjects subjects={subjects} setSubjects={setSubjects} />
          <button onClick={apply}>Apply Filters</button>
        </>
      )}
    </div>
  );
}
