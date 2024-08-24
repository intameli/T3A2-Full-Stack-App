import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp({ setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    async function signUp() {
      const response = await fetch("http://127.0.0.1:8000/api/auth/signup", {
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
        setUser(data);
        nav("/profile");
      } else {
        setError(data.error);
      }
    }
    signUp();
  }
  return (
    <form onSubmit={handleSubmit} className="login">
      <h3>Sign up</h3>
      <label>
        First Name
        <input
          placeholder="First Name"
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
