import { useState } from "react";

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

export function EditSubjects({ subjects, setSubjects }) {
  const [subject, setSubject] = useState("");

  return (
    <form
      className="subject-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubjects([...subjects, subject]);
        setSubject("");
      }}
    >
      <input value={subject} onChange={(e) => setSubject(e.target.value)} />
      <button>Add subject</button>
      <SubjectsRemovable subjects={subjects} setSubjects={setSubjects} />
    </form>
  );
}

function SubjectsRemovable({ subjects, setSubjects }) {
  let key = 1;

  function remove(e, index) {
    e.preventDefault();
    setSubjects(subjects.filter((s, i) => i !== index));
  }
  return (
    <div>
      <span style={{ fontWeight: "800" }}>Subjects: </span>
      {subjects.map((s, index) => {
        return (
          <span key={key++} className="subjects">
            {s}{" "}
            <button
              className="remove-subject"
              onClick={(e) => remove(e, index)}
            >
              x
            </button>
          </span>
        );
      })}
    </div>
  );
}
