import React from 'react';
import Image from 'next/image';

// Image
import DummyUserLogo from '@/public/dummy-user-logo.png';
import { TfiHeart, TfiSearch } from 'react-icons/tfi';
import { SlBasket } from 'react-icons/sl';
import Link from 'next/link';
import useUser from '@/lib/useUser';
import fetchJson from '@/utils/fetchJson';
import { useRouter } from 'next/router';

interface IProps {
  indexFunction: Function;
}

const NavbarManagement: React.FC<IProps> = ({ indexFunction }) => {
  const router = useRouter();
  const { user, mutateUser } = useUser();
  return (
    <div
      className="col-span-6 flex justify-end items-center md:col-span-12 lg:col-span-6 lg:ml-auto"
      onMouseMove={() => indexFunction(undefined)}
    >
      <div className="hidden md:block">
        {user?.isLoggedIn ? (
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar flex items-center mr-[30px]">
                <span className="pr-2 text-[12px] tracking-[1px] uppercase">
                  Welcome, {user?.data?.name}
                </span>
                <div className="w-10">
                  <Image src={DummyUserLogo} alt="Matter" />
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a
                  href="/api/logout"
                  onClick={async e => {
                    e.preventDefault();
                    mutateUser(
                      await fetchJson('/api/logout', { method: 'POST' }),
                      false
                    );
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="leading-[40px] pr-[29px] text-[12px] tracking-[1px]"
          >
            LOGIN
          </Link>
        )}
      </div>
      <div className="flex gap-5">
        <TfiSearch className="text-[20px] cursor-pointer hover-effect" />
        <TfiHeart className="text-[20px] cursor-pointer hover-effect" />
        <div className="relative hover-effect cursor-pointer">
          <SlBasket className="text-[20px]" />
          <div className="badge w-2 h-2 absolute top-[-2px] right-[-4px] p-0 border-orange-500 rounded-full bg-orange-500"></div>
        </div>
        <div className="hamburger block md:hidden">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default NavbarManagement;
