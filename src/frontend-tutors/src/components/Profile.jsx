import { useNavigate } from "react-router-dom";

export function Profile({ setUser }) {
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
      <h4>Change password</h4>
      <div>Old password</div>
      <div>New password</div>
      <div>Retype new password</div>
      <div>Submit</div>
    </div>
  );
}
