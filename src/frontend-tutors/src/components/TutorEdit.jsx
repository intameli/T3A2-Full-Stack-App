import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Subjects } from "./TutorPage";

export function TutorEdit() {
  const [name, setName] = useState("Enter name here");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [rate, setRate] = useState(0);
  const nav = useNavigate();

  function handleSubject() {
    setSubjects([...subjects, subject]);
    setSubject("");
  }

  async function handleSubmit() {
    const response = await fetch("http://127.0.0.1:8000/api/tutor", {
      method: "POST", // Specify the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // Indicate that you're sending JSON
      },
      body: JSON.stringify({
        name: name,
        subjects: subjects,
        rate: rate,
      }), // Convert data to JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    nav(-1);
  }

  return (
    <div className="tutorpage">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => nav(-1)} className="x">
        Back
      </button>
      <div>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} />
        <button onClick={handleSubject}>Add subject</button>
        <Subjects subjects={subjects} />
      </div>

      <h2 className="rate">
        $<input value={rate} onChange={(e) => setRate(e.target.value)} />
        /hr
      </h2>

      <div>Upload tutors resume</div>
      <p style={{ height: "120px" }}>TBD</p>
      <button
        onClick={handleSubmit}
        style={{ height: "2rem", alignSelf: "end" }}
      >
        Submit
      </button>
    </div>
  );
}
