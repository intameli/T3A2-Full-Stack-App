import { useParams, useNavigate } from "react-router-dom";

const tutor = {
  _id: "66c4b53bb79a98a75e773d52",
  name: "Bill",
  subjects: ["English", "French", "History"],
  rate: 40,
  createdAt: "2024-08-20T15:24:43.508Z",
  updatedAt: "2024-08-20T15:24:43.508Z",
  __v: 0,
};

export function TutorPage() {
  const { id } = useParams();
  const nav = useNavigate();
  return (
    <div className="tutorpage">
      <h3>{tutor.name}</h3>
      <button onClick={() => nav(-1)} className="x">
        Back
      </button>
      <Subjects subjects={tutor.subjects} />
      <h2 className="rate">${tutor.rate}/hr</h2>
      <div>Link to view tutors resume</div>
      <div>About tutor</div>
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
