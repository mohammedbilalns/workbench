import styles from "./userdetails.module.css";
export default function UserDetails({ user }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{user.name}</h1>
        <h3>Email:{user.email}</h3>
      </div>
    </>
  );
}
