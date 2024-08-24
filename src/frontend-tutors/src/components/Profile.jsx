import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFetchFunc } from "../hooks/useFetchFunc";

export function Profile({ user, setUser }) {
  const nav = useNavigate();
  function handleSignout() {
    localStorage.removeItem("user");
    setUser(null);
    nav("/login");
  }
  return (
    <div className="profile">
      <h3>Profile</h3>
      <button onClick={handleSignout}>Sign out</button>
      <ChangePassword user={user} />
    </div>
  );
}

export function ChangePassword({ user }) {
  console.log(user);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const { fetchData, loading, error } = useFetchFunc(
    `/auth/changePassword/${user.token}`
  );
  const [displayMessage, setDisplayMessage] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (pass === confirmPass) {
      const json = { password: pass };
      const data = await fetchData(json);
      if (error) {
        setDisplayMessage(error);
      } else {
        setDisplayMessage("Password successfully changed");
        setPass("");
        setConfirmPass("");
      }
    } else {
      setDisplayMessage("Passwords do not match");
    }
  }

  return (
    <div className="login">
      <h4>Change password</h4>
      <form className="login" onSubmit={handleSubmit}>
        <input
          placeholder="New Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          placeholder="Confirm New Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button>Submit</button>
        {displayMessage && <p>{displayMessage}</p>}
      </form>
    </div>
  );
}
