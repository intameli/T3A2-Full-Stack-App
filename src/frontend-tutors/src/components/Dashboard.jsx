import { TutorCards } from "./Tutors";
import { Filter } from "./Tutors";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const nav = useNavigate();

  function handleClick(id) {
    nav(`/dashboard/${id}`);
  }
  return (
    <>
      <div className="tutor-header">
        <h3>Dashboard</h3>
        <Filter startingPath="/dashboard" />
      </div>
      <div className="add">
        <p style={{ cursor: "pointer" }} onClick={() => nav(`/dashboard/new`)}>
          +
        </p>
        <div>Add new tutor</div>
      </div>
      <TutorCards handleClick={handleClick} />
    </>
  );
}
