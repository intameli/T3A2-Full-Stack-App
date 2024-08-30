import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import { useFetchFunc } from "../hooks/useFetchFunc";
import { EditSubjects } from "./Subjects";

export function TutorEdit({ user }) {
  const { id } = useParams();
  const { data, loading, error } = useFetchData(`/api/tutor/${id}`);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <TutorEditChild tutor={data || false} user={user} />;
}

function TutorEditChild({ tutor, user }) {
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
  } = useFetchFunc(`/api/tutor/${tutor._id}`, "PATCH", user.token);
  const {
    fetchData: deleteFetch,
    loading: deleteLoading,
    error: deleteError,
  } = useFetchFunc(`/api/tutor/${tutor._id}`, "DELETE", user.token);
  const {
    fetchData: postFetch,
    loading: postLoading,
    error: postError,
  } = useFetchFunc(`/api/tutor/`, "POST", user.token);

  async function handleDelete() {
    const data = await deleteFetch();
    if (data) {
      nav(-1);
    }
  }

  async function handleSubmit() {
    let tutorObj = { name, subjects, rate, about };
    const value = /^\d*\.?\d+$/.test(tutorObj.rate)
      ? parseFloat(tutorObj.rate)
      : NaN;
    tutorObj.rate = value.toFixed(2).toString();

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
          {removePdf ? (
            <span>Will be removed on submit</span>
          ) : (
            <button onClick={() => setRemovePdf(true)}>Remove Resume</button>
          )}
          <input type="file" onChange={(e) => setPdf(e.target.files[0])} />
        </div>
        <textarea
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
      <button disabled={link} onClick={handleClick}>
        Download resume
      </button>
      {link && (
        <a href={link} target="_blank">
          View Resume
        </a>
      )}
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
