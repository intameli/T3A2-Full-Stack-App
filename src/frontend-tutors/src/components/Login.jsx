import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchFunc } from "../hooks/useFetchFunc";

export function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  // const [errorLogin, setErrorLogin] = useState(null);
  const { fetchData, loading, error } = useFetchFunc(
    "/api/auth/recoverAccount",
    "POST"
  );
  const {
    fetchData: login,
    loading: loginLoading,
    error: errorLogin,
  } = useFetchFunc("/api/auth/login", "POST");
  const [message, setMessage] = useState(null);

  async function handleRecovery() {
    setMessage("Waiting for server to send email...");
    const data = await fetchData({ email });
    if (data) {
      setMessage(data.message);
    } else {
      setMessage("");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await login({ email, password });
    if (data) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      nav("/profile");
    }
    // async function signUp() {
    //   const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     localStorage.setItem("user", JSON.stringify(data));
    //     setUser(data);
    //     nav("/profile");
    //   } else {
    //     setErrorLogin(data.message);
    //   }
    // }
    // signUp();
  }
  return (
    <div className="login">
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
        {loginLoading && <p>Waiting for server...</p>}
        {errorLogin && <p style={{ color: "red" }}>{errorLogin.message}</p>}
      </form>
      <button onClick={handleRecovery}>Reset Password</button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}
