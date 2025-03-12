import React from "react";
import logo from "../images/east side.png";
import Button from "./UI/Button";


const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black px-32 py-2">
      <img src={logo} alt="East Side Logo" className="w-14" />
      <h1>Eastsyd</h1>
      <div className="relative flex items-center space-x-2">
  <input
    className="w-[620px] border border-black px-4 py-1 pr-10"
    placeholder="Search..."
  />
  <i className="fa-solid fa-magnifying-glass text-black absolute right-3 top-1/2 transform -translate-y-1/2"></i>
</div>


        <nav>
          <ul className="flex space-x-4 ">
            <li className="flex items-center">
              <h2 className="text-white hover:text-gray-400">
                 Account <i className="fa-regular fa-user"></i>
              </h2>
            </li>
            <li className="flex items-center">
              <h2 className="text-white hover:text-gray-400">
                Help <i className="fa-regular fa-circle-question"></i> 
              </h2>
            </li>
            <li className="flex items-center">
              <h2 className="text-white hover:text-gray-400">
              <Button textOnly>Cart <i className="fa-solid fa-cart-shopping"></i> (0)</Button>
              </h2>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
