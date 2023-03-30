import logo from "../assets/logo.png";
import arrow from "../assets/arrow.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full px-10 xl:px-28  sm:py-6 flex justify-between items-center absolute z-10 bg-primary xl:bg-transparent">
      <div>
        <img
          src={logo}
          alt="logo"
          className="object-contain w-28 h-20 sm:h-14 cursor-pointer  
      "
        />
      </div>
      <ul className="xl:flex hidden gap-4">
        <li className="px-4 py-2 border-2 rounded-3xl cursor-pointer ">
          <a href="#hero">About Us</a>
        </li>
        <li className="px-4 py-2 border-2 rounded-3xl cursor-pointer ">
          Article
        </li>
        <li className="px-4 py-2 border-2 rounded-3xl cursor-pointer flex gap-2">
          Property <img src={arrow} alt="arrow" />
        </li>
        <li className="px-6 py-3 ml-4 rounded-3xl text-tertiary cursor-pointer bg-greeny font-semibold">
          Sign Up!
        </li>
      </ul>

      <div className="xl:hidden gap-4 flex relative">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            toggle ? "block" : "hidden"
          } w-40 h-52 py-2 px-5 rounded-3xl bg-primary border-2 absolute top-5 right-6`}
        >
          <ul className="flex-col flex gap-3 mt-5 items-start">
            <li>About Us</li>
            <li>Article</li>
            <li>About Us</li>
            <li className="px-3 py-2 rounded-3xl text-tertiary cursor-pointer bg-greeny font-semibold">
              Sign Up!
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
