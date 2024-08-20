import { useState } from "react";

// test data
const tutors = [
  {
    name: "Tutor 1 name",
    rate: 35,
    id: 0,
  },
  // {
  //   name: "Tutor 2 name",
  //   rate: 40,
  //   id: 1,
  // },
  // {
  //   name: "Tutor 3 name",
  //   rate: 30,
  //   id: 2,
  // },
];

export function TutorList() {
  // this state contains the tutor id for the open modal
  // when it is null the modal is closed
  const [modalOpen, setModalOpen] = useState(null);

  const handleClick = (id) => {
    setModalOpen(id);
  };

  const findTutor = (id) => {
    return tutors.find((tutor) => tutor.id === id);
  };
  // this component needs a parent component to make it cleaner
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
      {tutors.map((tutor) => {
        return <TutorCard key={tutor.id} onClick={handleClick} tutor={tutor} />;
      })}

      {modalOpen !== null && (
        <Modal setModalOpen={setModalOpen} tutor={findTutor(modalOpen)} />
      )}
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
    </div>
  );
}

function TutorCard({ onClick, tutor }) {
  return (
    <div className="card" onClick={() => onClick(tutor.id)}>
      <h3>{tutor.name}</h3>
      <h2 className="rate">${tutor.rate}/hr</h2>
      <p>Some details</p>
      <Modal setModalOpen={() => {}} tutor={tutor} />
    </div>
  );
}

function Modal({ setModalOpen, tutor }) {
  return (
    <dialog>
      <button onClick={() => setModalOpen(null)} className="x">
        x
      </button>
      <h3>{tutor.name}</h3>
      <h2 className="rate">${tutor.rate}/hr</h2>
      <div>List of subjects the tutor teaches</div>
      <div>Link to view tutors resume</div>
      <p>More details</p>
    </dialog>
  );
}
