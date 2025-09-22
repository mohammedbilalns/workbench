function ProfilePicture() {
  const imageUrl = `https://placehold.co/150`;
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return (
    <>
      <img
        onClick={(e) => handleClick(e)}
        src={imageUrl}
        alt="profilepicture"
      />
      <br />
    </>
  );
}
export default ProfilePicture;
