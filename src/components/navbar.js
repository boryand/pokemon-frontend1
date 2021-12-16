import react from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navcontainer">
      <li className="navpaths"> <Link className="aaa" to ="/"> HOME </Link></li>
      <li className="navpaths"> <Link className="aaa" to ="/play">PLAY </Link>  </li>
    </ul>
    </div>
  );
};

export default Navbar;
