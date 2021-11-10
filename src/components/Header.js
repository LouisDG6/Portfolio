import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div className="home">HOME</div>
        </Link>
        <Link to="/about">
          <div className="about">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="projects">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;