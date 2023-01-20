import Image from 'next/image';
import React from 'react';

import Logo from '../../public/matter-logo-1x.png';

import {
  HiMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUser
} from 'react-icons/hi2';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <Link href="/">
          <Image src={Logo} className="w-32" alt="Logo" />
        </Link>

        <div className="w-full max-w-xl relative flex my-5 px-3 md:px-0">
          <span className="absolute left-5 top-3 text-lg text-gray-400">
            <HiMagnifyingGlass size={22} />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-8 py-3 pr-3 rounded-l-md focus:outline-none md:pl-12"
            placeholder="Search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
              <HiOutlineHeart />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
              <HiOutlineShoppingBag />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
              <HiOutlineUser />
            </div>
            <div className="text-xs leading-3">Account</div>
          </div>
        </div>
      </div>
    </header>
  );
}
