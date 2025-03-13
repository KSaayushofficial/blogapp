import Link from "next/link";
import React from "react";

const NavLink = ({ item }) => {
  return (
    <Link
      href={item.path}
      className="min-w-[100px] p-[5px] rounded-[20px] font-medium flex justify-between items-center 
                 text-white transition-all duration-300  
                 group-hover:opacity-0 hover:!opacity-100 hover:!text-black hover:!bg-white hover:!rounded-3xl "
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
