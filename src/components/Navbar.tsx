import logo from "../assets/logo.png";
import arrow from "../assets/arrow.svg";
import menu from "../assets/menu.svg";
export default function Navbar() {
  return (
    <nav className="w-full px-10 xl:px-28  sm:py-6 flex justify-between items-center absolute bg-primary xl:bg-transparent">
      <div>
        <img
          src={logo}
          alt="logo"
          className="object-contain w-28 h-20 sm:h-14 cursor-pointer  
      "
        />
      </div>
      <div className="xl:flex hidden gap-4">
        <ul>
          <li className="px-4 py-2 border-2 rounded-3xl cursor-pointer ">
            About Us
          </li>
        </ul>
        <ul>
          <li className="px-4 py-2 border-2 rounded-3xl cursor-pointer ">
            Article
          </li>
        </ul>
        <ul>
          <li className="px-4 py-2 border-2 rounded-3xl cursor-pointer flex gap-2">
            Property <img src={arrow} alt="arrow" />
          </li>
        </ul>
        <ul>
          <li className="px-6 py-3 ml-4 rounded-3xl text-tertiary cursor-pointer bg-greeny font-semibold">
            Sign Up!
          </li>
        </ul>
      </div>
      <div className="xl:hidden gap-4 flex">
        <img src={menu} alt="menu" />
      </div>
    </nav>
  );
}
