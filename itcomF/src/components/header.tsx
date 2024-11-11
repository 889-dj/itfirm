import { useState } from "react";
import { Button } from "./ui/button"; // Assuming this is a custom button component
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { DropdownMenuCheckboxes } from "./Options";

const Header = () => {
  const [menu, setMenu] = useState(false);

  // Function to close mobile menu on link click
  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="scale-[0.8]">
          <img src='../../public/logo.svg' alt="logo" className="w-full h-full" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8 text-gray-700 items-center">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={'/about'}>About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center">
            <Link to={'/service'}>Service</Link>
            <DropdownMenuCheckboxes />
          </li>
          <li className="hover:text-white text-gray-300 cursor-pointer bg-blue-500 rounded-full px-3 py-1">
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setMenu(!menu)}
          className="md:hidden focus:outline-none"
        >
          {!menu ? <IoMenu className="h-7 w-7" /> : <RxCross2 className="h-7 w-7" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${menu ? "block" : "hidden"} md:hidden bg-white w-full py-5 shadow-md`}>
        <ul className="flex flex-col items-center gap-y-4 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer" onClick={handleLinkClick}>
            <Link to={'/'}>Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={handleLinkClick}>
            <Link to={'/about'}>About</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer flex items-center ml-12">
            <Link to={'/service'} className="">Service</Link>
            <DropdownMenuCheckboxes />
          </li>
          <li className="hover:text-white cursor-pointer bg-blue-500 rounded-full px-3 py-1" onClick={handleLinkClick}>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
