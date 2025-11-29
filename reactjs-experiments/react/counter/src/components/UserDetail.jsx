import { useEffect, useState } from "react";

export default function UserDetail({ count }) {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (count === 0) {
        setError("Count is zero. No user to fetch.");
        setUserDetails({ name: "", email: "" });
        return;
      }

      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        
        const data = await res.json();
        setUserDetails({ name: data.name, email: data.email });
      } catch (err) {
        setError(err.message);
        setUserDetails({ name: "", email: "" });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [count]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "300px",
        margin: "1rem auto",
        fontFamily: "Arial",
      }}
    >
      {loading ? (
        <p style={{ color: "blue" }}>Loading user details...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <p style={{ fontWeight: "bold" }}>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
        </>
      )}
    </div>
  );
}
