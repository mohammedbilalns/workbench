import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <p>Home</p>
      <Link to="/about">About</Link>
    </>
  );
}
