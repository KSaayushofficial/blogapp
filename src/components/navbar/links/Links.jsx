"use client";
import React, { useState } from "react";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className="flex items-center relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="rounded-[20px] font-medium text-white transition-all duration-300 group-hover:opacity-0">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Menu Button (for mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white z-50 p-2 bg-gray-800 rounded"
      >
        {open ? "Close" : "Menu"}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`${
          open ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-2/3 h-full bg-cyan-500 flex flex-col items-center justify-center gap-5 transition-transform duration-300 ease-in-out md:hidden`}
      >
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
      </div>
    </div>
  );
};

export default Links;
