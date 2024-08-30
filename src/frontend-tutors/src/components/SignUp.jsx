import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp({ setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  let url = "http://127.0.0.1:8000/api/auth/signup";
  let admin = false;
  if (setUser === false) {
    url = "http://127.0.0.1:8000/api/auth/signupadmin";
    admin = true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    async function signUp() {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        if (setUser) {
          setUser(data);
          nav("/profile");
        } else {
          setMessage("Email has been sent with a new random password");
        }
      } else {
        setError(data.error);
      }
      console.log(data);
    }
    signUp();
  }
  return (
    <form onSubmit={handleSubmit} className="login">
      <h3>Sign up</h3>
      <label>
        First Name
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input
          required={true}
          disabled={admin}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p>{message}</p>}
    </form>
  );
}
