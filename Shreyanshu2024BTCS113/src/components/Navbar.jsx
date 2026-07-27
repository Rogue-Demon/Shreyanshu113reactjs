import { NavLink } from "react-router-dom";
import portfolioData from "../data/portfolioData";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-slate-800 text-white">

      <h2 className="text-2xl font-bold">
        {portfolioData.name}
      </h2>

      <div className="flex gap-6">

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </div>

      <p>
        {portfolioData.tag}
      </p>

    </nav>
  );
}

export default Navbar;