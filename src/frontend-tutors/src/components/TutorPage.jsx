import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { Resume } from "./TutorEdit";

export function TutorPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, loading, error } = useFetchData(`/api/tutor/${id}`);
  const tutor = data;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="tutorpage">
      <h3>{tutor.name}</h3>
      <button onClick={() => nav(-1)} className="x">
        Back
      </button>
      <Subjects subjects={tutor.subjects} />
      <h2 className="rate">${tutor.rate}/hr</h2>
      <Resume id={id} meta={tutor?.pdfMetaData} />
      <div>{tutor?.about}</div>
    </div>
  );
}

export function Subjects({ subjects }) {
  let i = 1;
  return (
    <div>
      <span style={{ fontWeight: "800" }}>Subjects: </span>
      {subjects.map((s) => {
        return (
          <span key={i++} className="subjects">
            {s}
          </span>
        );
      })}
    </div>
  );
}
