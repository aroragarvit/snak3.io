const Navbar = () => {
  return (
    <nav
      style={{
        borderBottom: "3px solid black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <h1>Snak3</h1>
      <button
        style={{
          height: "30px",
          padding: "0 20px",
          backgroundColor: "#FCC5C0",
          borderRadius: "5px",
          border: "2px solid black",
          borderStyle: "groove",
        }}
      >
        Connect
      </button>
    </nav>
  );
};
export default Navbar;
