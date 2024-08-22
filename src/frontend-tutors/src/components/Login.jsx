import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    async function signUp() {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", data);
        setUser(data);
        nav("/profile");
      } else {
        setError(data.message);
      }
    }
    signUp();
  }
  return (
    <form onSubmit={handleSubmit} className="login">
      <h3>Login</h3>
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

      <button>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>Reset Password</div>
    </form>
  );
}
