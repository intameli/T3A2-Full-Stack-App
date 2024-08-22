import { useState, useEffect } from "react";
import { TutorCards } from "./Tutors";
import { Subjects } from "./TutorPage";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick() {
    setModalOpen(true);
  }
  return (
    <div className="card-container">
      <div className="tutor-header">
        <h3>Dashboard</h3>
        <h4 className="sort">Sort/Filter options</h4>
      </div>
      <div className="add">
        <p style={{ cursor: "pointer" }} onClick={handleClick}>
          +
        </p>
        <div>Add new tutor</div>
      </div>
      {modalOpen ? <DashModal setModalOpen={setModalOpen} /> : <TutorCards />}
    </div>
  );
}

function DashModal({ setModalOpen }) {
  const [name, setName] = useState("Enter name here");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [rate, setRate] = useState(0);

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
    setModalOpen(false);
  }

  return (
    <dialog>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setModalOpen(false)} className="x">
        Back
      </button>
      <div>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} />
        <button onClick={handleSubject}>Add subject</button>
      </div>

      <h2 className="rate">
        $<input value={rate} onChange={(e) => setRate(e.target.value)} />
        /hr
      </h2>

      <Subjects subjects={subjects} />
      <div>Upload tutors resume</div>
      <p style={{ height: "120px" }}>TBD</p>
      <button
        onClick={handleSubmit}
        style={{ height: "2rem", alignSelf: "end" }}
      >
        Submit
      </button>
    </dialog>
  );
}
