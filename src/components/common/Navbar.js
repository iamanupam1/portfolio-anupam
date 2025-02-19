"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar fluid className="bg-transparent text-white px-5 md:px-10 md:py-3">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          anupamdkl<span className="text-cyan-400 ml-1">.</span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="lowercase">
        <Navbar.Link
          className="text-white text-lg  md:hover:text-cyan-400 hover:text-cyan-400 hover:bg-gray-500"
          href="#hero"
        >
          <span className="mr-1 text-cyan-400 font-semibold">I.</span>Home
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-lg  md:hover:text-cyan-400 hover:text-cyan-400 hover:bg-gray-500"
          href="#"
        >
          <span className="mr-1 text-cyan-400 font-semibold">II.</span>Expertise
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-lg  md:hover:text-cyan-400 hover:text-cyan-400 hover:bg-gray-500"
          href="#"
        >
          <span className="mr-1 text-cyan-400 font-semibold">III.</span>Work
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-lg  md:hover:text-cyan-400 hover:text-cyan-400 hover:bg-gray-500"
          href="#"
        >
          <span className="mr-1 text-cyan-400 font-semibold">IV.</span>
          Experience
        </Navbar.Link>
        <Navbar.Link
          className="text-white text-lg  md:hover:text-cyan-400 hover:text-cyan-400 hover:bg-gray-500"
          href="#"
        >
          <span className="mr-1 text-cyan-400 font-semibold">V.</span>Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
