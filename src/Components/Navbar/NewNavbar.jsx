import React, { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";
import "../../Components/Navbar/Nav.css";
// import logo from "../Images/red.png";
import { Link } from "react-router-dom";
// import logo from "../../Images/3.webp";

const NewNavbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className=" flex items-center bg-[#173563] px-8 py-2 justify-between w-full text-white ">
      <div className="lg:w-[60%]">
      <Link to="/">
        {/* <img className="w-40 h-full rounded-md" src={logo} /> */}
      </Link>
      </div>
      <ul
        className={icon ? "menu active" : "hidden lg:flex items-center justify-between w-[40%] text-white no-underline "}
        onclick={() => seticon(!icon)}
      >
        <li>
          <Link className='cursor-pointer text-xl hover:text-[#52b1b5] hover:no-underline ' to="/" onClick={() => seticon(!icon)}>
            Home
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer text-xl hover:text-[#52b1b5] hover:no-underline ' to="/services" onClick={() => seticon(!icon)}>
            Services
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer text-xl hover:text-[#52b1b5] hover:no-underline ' to="/portfolio" onClick={() => seticon(!icon)}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer text-xl hover:text-[#52b1b5] hover:no-underline ' to="/stock" onClick={() => seticon(!icon)}>
            Stock
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer text-xl hover:text-[#52b1b5] hover:no-underline ' to="/ourblogs" onClick={() => seticon(!icon)}>
            Our Blogs
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer text-xl hover:text-[#52b1b5] hover:no-underline ' to="/contact" onClick={() => seticon(!icon)}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon text-white" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default NewNavbar;
