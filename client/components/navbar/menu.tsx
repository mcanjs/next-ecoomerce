import Link from 'next/link';
import React from 'react';
import { TfiAngleDown, TfiAngleRight } from 'react-icons/tfi';

// Dummy Data
import navbarData from './data.json';

interface IProps {
  activeMenuIndex: undefined | number;
  indexFunction: Function;
}

const NavbarMenu: React.FC<IProps> = ({ activeMenuIndex, indexFunction }) => {
  const data = navbarData;
  return (
    <div className="col-span-12 hidden relative md:col-span-6 lg:col-span-5 md:block">
      <div className="ml-[34px]">
        <ul className="menu menu-horizontal p-0">
          {data.menus.map((menu, index) => (
            <li key={index} onMouseMove={() => indexFunction(index)}>
              <span
                className={`${
                  activeMenuIndex === index ? 'text-orange-500' : ''
                } text-[12px] tracking-[1px] hover:bg-transparent`}
              >
                {menu.title}
                <TfiAngleDown
                  className={`${
                    activeMenuIndex === index ? 'rotate-180' : ''
                  } transition-transform`}
                />
              </span>
            </li>
          ))}
        </ul>
        <div
          className={`${
            typeof activeMenuIndex !== 'undefined'
              ? 'z-[10] opacity-100 visible'
              : 'z-[-1] opacity-0 invisible'
          } w-full h-[calc(100%-120px)] min-h-[40vh] fixed top-[120px] left-0 p-5 transition-opacity shadow-md bg-white md:h-auto md:p-4 lg:top-[80px] lg:p-0`}
        >
          <div className="grid grid-cols-12 container mx-auto">
            {typeof activeMenuIndex !== 'undefined' &&
              data.menus[activeMenuIndex].subNav.map((subNav, index) => (
                <div key={index} className="col-span-6 md:col-span-3">
                  <div
                    key={'subnav' + index}
                    className="leading-[40px] text-[24px] font-thin"
                  >
                    {subNav.title}
                  </div>
                  <div className="mt-[8px]">
                    {subNav.subItems.map((subItem, subItemIndex) => (
                      <div
                        className="flex items-center pl-2 hover-effect"
                        key={'subItem' + subItemIndex}
                      >
                        <TfiAngleRight size={12} className="mr-2" />
                        <Link
                          className="leading-[40px] text-[12px] tracking-[1px]"
                          href={subItem.url}
                        >
                          {subItem.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
