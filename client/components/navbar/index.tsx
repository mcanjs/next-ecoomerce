import Link from 'next/link';
import React from 'react';

import {
  GiComputerFan,
  GiPc,
  GiKeyboard,
  GiHamburgerMenu,
  GiWifiRouter,
  GiGameConsole
} from 'react-icons/gi';

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container flex flex-col md:flex-row">
        <div className="px-2 py-4 bg-primary flex items-center cursor-pointer relative group md:px-8">
          <span className="text-white">
            <GiHamburgerMenu size={20} />
          </span>
          <span className="capitalize ml-2 text-white text-[10px] md:text-base">
            All Categories
          </span>

          <div className="z-[1] absolute w-full left-0 top-full bg-white shadow-md divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <GiPc size={30} />
              <span className="ml-4 text-gray-600 text-sm">Computer</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <GiComputerFan size={30} />
              <span className="ml-4 text-gray-600 text-sm">Parts</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <GiKeyboard size={30} />
              <span className="ml-4 text-gray-600 text-sm">Components</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <GiWifiRouter size={30} />
              <span className="ml-4 text-gray-600 text-sm">Network</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <GiGameConsole size={30} />
              <span className="ml-4 text-gray-600 text-sm">Consoles</span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center flex-grow px-2 py-4 overflow-hidden overflow-x-auto text-[10px] md:justify-between md:pl-12 md:py-0 md:text-base">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
          <Link
            href="/login"
            className="text-gray-200 hover:text-white transition pl-6"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
