import React from "react";
import { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { AppContext } from "../App";

function Navbar() {
  //   const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { showMobileMenu, setShowMobileMenu } = useContext(AppContext);
  const handleClick = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-8 md:px-2 lg:px-52 bg-[#164863] text-[#DDF2FD]">
      <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-[#427D9D] rounded-full">
        <span className="font-medium text-gray-600 dark:text-gray-300">JS</span>
      </div>

      {/* Main Menu */}

      <ul className="hidden md:flex text-2xl">
        <li className="hover:bg-[#9BBEC8] hover:text-[#164863] duration-200 rounded-lg">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-[#9BBEC8] hover:text-[#164863] duration-200 rounded-lg">
          <Link to="about" offset={-30} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-[#9BBEC8] hover:text-[#164863] duration-200 rounded-lg">
          <Link to="projects" isDynamic={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:bg-[#9BBEC8] hover:text-[#164863] duration-200 rounded-lg">
          <Link to="contact" smooth={true} duration={500}>
            Contact me
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}

      <div onClick={handleClick} className="md:hidden z-[1700]">
        {!showMobileMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !showMobileMenu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#164863] opacity-90 flex flex-col justify-center items-center z-[1600]"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" offset={-50} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
