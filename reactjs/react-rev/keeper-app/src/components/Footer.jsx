function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      {" "}
      <p className="footer"> Copyright © {`${currentYear}`}</p>;
    </footer>
  );
}
export default Footer;
