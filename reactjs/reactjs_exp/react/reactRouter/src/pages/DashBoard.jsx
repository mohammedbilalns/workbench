import { Outlet, Link, useNavigate } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();
  function next() {
    navigate(1)
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
      This is Dashboard
      <Outlet />
      <button onClick={next}>next</button>
    </div>
  );
}
