import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Subjects } from "./TutorPage";
import { useFetchData } from "../hooks/useFetchData";
import { useFetchFunc } from "../hooks/useFetchFunc";

export function TutorEdit() {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(`/api/tutor/${id}`);
  const nav = useNavigate();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function handleNew(tutorObj) {
    const response = await fetch("http://127.0.0.1:8000/api/tutor", {
      method: "POST", // Specify the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // Indicate that you're sending JSON
      },
      body: JSON.stringify(tutorObj), // Convert data to JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    nav(-1);
  }

  if (data) {
    return <TutorEditChild tutor={data} />;
  } else {
    return <TutorEditChild tutor={{}} handleFunc={handleNew} />;
  }
}

function TutorEditChild({ tutor, handleFunc = false }) {
  const [name, setName] = useState(tutor?.name ?? "");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState(tutor?.subjects ?? []);
  const [rate, setRate] = useState(tutor?.rate ?? "");
  const nav = useNavigate();
  const {
    fetchData: patchFetch,
    loading: patchLoading,
    error: patchError,
  } = useFetchFunc(`/api/tutor/${tutor._id}`, "PATCH");
  const {
    fetchData: deleteFetch,
    loading: deleteLoading,
    error: deleteError,
  } = useFetchFunc(`/api/tutor/${tutor._id}`, "DELETE");
  let deleteBtn = false;

  async function handleDelete() {
    const data = await deleteFetch();
    if (data) {
      nav(-1);
    }
  }

  async function handleEdit(tutorObj) {
    const data = await patchFetch(tutorObj);
    if (data) {
      nav(-1);
    }
  }
  if (handleFunc === false) {
    handleFunc = handleEdit;
    deleteBtn = true;
  }

  function handleSubject() {
    setSubjects([...subjects, subject]);
    setSubject("");
  }

  async function handleSubmit() {
    handleFunc({ name, subjects, rate });
  }

  return (
    <>
      <div className="tutorpage">
        <input
          placeholder="Tutor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        {deleteBtn && <button onClick={handleDelete}>Delete</button>}
      </div>
      {deleteError && <p>{deleteError.message}</p>}
      {patchError && <p>{patchError.message}</p>}
      {deleteLoading && <p>Waiting for server to delete tutor...</p>}
      {patchLoading && <p>Waiting for server to update tutor...</p>}
    </>
  );
}
