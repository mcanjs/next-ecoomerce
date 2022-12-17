import React, { useState } from 'react';
import Link from 'next/link';

// Components
import NavbarLogo from './logo';
import NavbarMenu from './menu';
import NavbarManagement from './management';

const Navbar: React.FC = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | undefined>(
    undefined
  );
  return (
    <div
      className="navbar fixed top-0 left-0 z-[11] h-[120px] bg-base-100 lg:h-[80px]"
      onMouseLeave={() => setActiveMenuIndex(undefined)}
    >
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-12 pr-5 pl-5 md:pr-0 md:pl-0">
          <NavbarLogo indexFunction={setActiveMenuIndex} />
          <NavbarMenu
            activeMenuIndex={activeMenuIndex}
            indexFunction={setActiveMenuIndex}
          />
          <NavbarManagement indexFunction={setActiveMenuIndex} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
