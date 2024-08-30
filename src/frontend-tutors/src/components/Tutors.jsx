import { useState } from "react";
import { Subjects, EditSubjects } from "./Subjects";
import { useNavigate, useLocation } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

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
  const location = useLocation();
  const queryString = location.search;
  const { data, loading, error } = useFetchData(`/api/tutor${queryString}`);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="card-container">
      {data.map((tutor) => {
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
