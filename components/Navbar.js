import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-center fixed top-0 left-[50%] translate-x-[-50%] bg-secondary-dark/70 w-full">
      <span className=" text-[4rem] font-bold text-gray-200 uppercase">
        Cab<span className="text-secondary-pink"> Share</span>
      </span>
    </nav>
  );
};

export default Navbar;
