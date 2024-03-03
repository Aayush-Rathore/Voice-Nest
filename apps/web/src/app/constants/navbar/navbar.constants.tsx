import React from "react";
import { IoSearchSharp } from "@/assets/icons";
import { ModeToggle } from "../themeToggler/themeToggler.constants";
import styles from "./navbar.module.css";
import { IoMenu } from "@/assets/icons";
// import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <header className="p-2 flex flex-row justify-between items-center">
      <img src="./next.svg" alt="Logo" width={100} />
      <div
        // variants={{ hidden: { x: -100 }, visible: { x: 0 } }}
        // initial={"hidden"}
        // animate={"visible"}
        className="hidden"
      >
        <div>
          <input type="text" name="search" id="search" placeholder="Search" />
          <label htmlFor="search" className="mr-3">
            <IoSearchSharp size={25} />
          </label>
        </div>
        <nav>
          <ul>
            <li>Posts</li>
            <li>Queries</li>
            <li>Menu</li>
          </ul>
          <ModeToggle />
        </nav>
      </div>
      <IoMenu size={30} />
    </header>
  );
};

export default Navbar;
