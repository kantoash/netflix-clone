import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BasicMenu from "./BasicMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10  ">
        <img
        src="https://rb.gy/ulxxee"
          alt="Netflix"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <BasicMenu/>
        <ul className="hidden space-x-4 md:flex">
          <li className="HeaderLink">Home</li>
          <li className="HeaderLink">TV Shows</li>
          <li className="HeaderLink">Movies</li>
          <li className="HeaderLink">New & Popular</li>
          <li className="HeaderLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-7 w-7 " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
       
          <img 
          onClick={logout}
          src="https://rb.gy/g1pwyx" className="cursor-pointer rounded" />
       
      </div>
    </header>
  );
}

export default Header;
