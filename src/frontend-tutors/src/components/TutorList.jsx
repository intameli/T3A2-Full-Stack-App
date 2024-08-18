export function TutorList() {
  const tutors = [
    {
      name: "Tutor 1 name",
      rate: 35,
    },
    {
      name: "Tutor 2 name",
      rate: 40,
    },
    {
      name: "Tutor 3 name",
      rate: 30,
    },
  ];
  return (
    <div className="card-container">
      <div className="tutor-header">
        <h3>Dashboard</h3>
        <h4 className="sort">Sort/Filter options</h4>
      </div>
      <div className="add">
        <p>+</p>
        <div>Add new tutor</div>
      </div>
      {tutors.map((tutor) => {
        return (
          <div className="card">
            <h3>{tutor.name}</h3>
            <h2 className="rate">${tutor.rate}/hr</h2>
            <p>Some details</p>
          </div>
        );
      })}
      {/* <dialog>
        <div className="x">x</div>
        <h3>{tutors[0].name}</h3>
        <h2 className="rate">${tutors[0].rate}/hr</h2>
        <div>List of subjects the tutor teaches</div>
        <div>Link to view tutors resume</div>
        <p>More details</p>
      </dialog> */}
      <dialog>
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
      </dialog>
    </div>
  );
}
