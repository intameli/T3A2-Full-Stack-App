import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { useFetchFunc } from "../hooks/useFetchFunc";

export function TutorEdit() {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(`/api/tutor/${id}`);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <TutorEditChild tutor={data || false} />;
}

function TutorEditChild({ tutor }) {
  const [name, setName] = useState(tutor?.name ?? "");
  const [subjects, setSubjects] = useState(tutor?.subjects ?? []);
  const [rate, setRate] = useState(tutor?.rate ?? "");
  const [about, setAbout] = useState(tutor?.about ?? "");
  const [pdf, setPdf] = useState(null);
  const nav = useNavigate();
  const [removePdf, setRemovePdf] = useState(false);

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
  const {
    fetchData: postFetch,
    loading: postLoading,
    error: postError,
  } = useFetchFunc(`/api/tutor/`, "POST");

  async function handleDelete() {
    const data = await deleteFetch();
    if (data) {
      nav(-1);
    }
  }

  async function handleSubmit() {
    let tutorObj = { name, subjects, rate, about };
    if (pdf) {
      tutorObj.pdfMetaData = { name: pdf.name, size: pdf.size };
      tutorObj.pdf = await pdfToString(pdf);
    } else if (removePdf) {
      tutorObj.pdfMetaData = {};
      tutorObj.pdf = "";
    }
    let data;
    if (tutor) {
      data = await patchFetch(tutorObj);
    } else {
      console.log("yes");
      data = await postFetch(tutorObj);
    }
    if (data) {
      nav(-1);
    }
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
        <EditSubjects subjects={subjects} setSubjects={setSubjects} />

        <h2 className="rate">
          $<input value={rate} onChange={(e) => setRate(e.target.value)} />
          /hr
        </h2>

        <div>
          <Resume id={tutor._id} meta={tutor?.pdfMetaData} />
          <button onClick={() => setRemovePdf(true)}>Remove Resume</button>
          {removePdf && <span>Will be removed on submit</span>}
          <input type="file" onChange={(e) => setPdf(e.target.files[0])} />
        </div>
        <p style={{ height: "120px" }}>Fix CSS</p>
        <input
          placeholder="About Tutor"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          style={{ height: "2rem", alignSelf: "end" }}
        >
          Submit
        </button>
        {tutor && <button onClick={handleDelete}>Delete</button>}
      </div>
      {deleteError && <p>{deleteError.message}</p>}
      {patchError && <p>{patchError.message}</p>}
      {postError && <p>{postError.message}</p>}
      {deleteLoading && <p>Waiting for server to delete tutor...</p>}
      {patchLoading && <p>Waiting for server to update tutor...</p>}
      {postLoading && <p>Waiting for server to create tutor...</p>}
    </>
  );
}

export function Resume({ id, meta }) {
  const { fetchData, loading, error } = useFetchFunc(
    `/api/tutor/pdf/${id}`,
    "GET"
  );
  const [link, setLink] = useState(null);

  if (!meta) return <div>No Resume Available</div>;

  async function handleClick() {
    const data = await fetchData();
    if (data) setLink(stringToPdf(data.pdf));
  }
  return (
    <div>
      <p>
        {meta.name}, {meta.size} Bytes
      </p>
      <button onClick={handleClick}>Download resume</button>
      {link && (
        <a href={link} target="_blank">
          View Resume
        </a>
      )}
    </div>
  );
}

export function EditSubjects({ subjects, setSubjects }) {
  const [subject, setSubject] = useState("");

  return (
    <div>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} />
      <button
        onClick={() => {
          setSubjects([...subjects, subject]);
          setSubject("");
        }}
      >
        Add subject
      </button>
      <SubjectsRemovable subjects={subjects} setSubjects={setSubjects} />
    </div>
  );
}

export function SubjectsRemovable({ subjects, setSubjects }) {
  let i = 1;

  function remove(subject) {
    setSubjects(subjects.filter((item) => item !== subject));
  }
  return (
    <div>
      <span style={{ fontWeight: "800" }}>Subjects: </span>
      {subjects.map((s) => {
        return (
          <span key={i++} className="subjects">
            {s}{" "}
            <button className="remove-subject" onClick={() => remove(s)}>
              x
            </button>
          </span>
        );
      })}
    </div>
  );
}

function pdfToString(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(",")[1];
      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

function stringToPdf(base64) {
  const binary = atob(base64); // Decode Base64
  const array = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  const blob = new Blob([new Uint8Array(array)], { type: "application/pdf" });

  // Create Object URL
  const url = URL.createObjectURL(blob);
  return url;
}
