import { useState, useEffect } from "react";

export function Tutors() {
  return (
    <div className="card-container">
      <div className="tutor-header">
        <h3>All Tutors</h3>
        <h4 className="sort">Sort/Filter options</h4>
      </div>
      {/* <div className="add">
        <p>+</p>
        <div>Add new tutor</div>
      </div> */}

      <TutorCards />
    </div>
  );
}

export function TutorCards() {
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
    <>
      {/* <div className="add">
        <p>+</p>
        <div>Add new tutor</div>
      </div> */}

      {tutors.map((tutor) => {
        return <TutorCard key={tutor._id} tutor={tutor} />;
      })}

      {/* <dialog>
        <div className="x">x</div>
        <h3>Editable {tutors[0].name}</h3>
        <h3 className="rate">
          <div>Editable rate</div>
        </h3>
        <div>Editable list of subjects the tutor teaches</div>
        <div>Resume upload component</div>
        <p>Editable about section</p>
        <div>Submit button</div>
        <div>Delete tutor</div>
      </dialog> */}
    </>
  );
}

function TutorCard({ tutor }) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleClick() {
    setModalOpen(true);
  }

  return (
    <>
      <div className="card" onClick={handleClick}>
        <h3>{tutor.name}</h3>
        <h2 className="rate">${tutor.rate}/hr</h2>
        <p>Some details</p>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen} tutor={tutor} />}
    </>
  );
}

function Modal({ setModalOpen, tutor }) {
  return (
    <dialog>
      <button onClick={() => setModalOpen(false)} className="x">
        x
      </button>
      <h3>{tutor.name}</h3>
      <h2 className="rate">${tutor.rate}/hr</h2>
      <Subjects subjects={tutor.subjects} />
      <div>Link to view tutors resume</div>
      <p>More details</p>
    </dialog>
  );
}

export function Subjects({ subjects }) {
  return (
    <div>
      <span style={{ fontWeight: "800" }}>Subjects: </span>
      {subjects.map((s) => {
        return (
          <span key={s} className="subjects">
            {s}
          </span>
        );
      })}
    </div>
  );
}
