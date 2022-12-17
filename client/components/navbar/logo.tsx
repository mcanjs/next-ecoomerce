import React from 'react';
import Image from 'next/image';

// Image
import logo from '../../public/matter-logo-1x.png';

interface IProps {
  indexFunction: Function;
}

const NavbarLogo: React.FC<IProps> = ({ indexFunction }) => {
  return (
    <div
      className="col-span-6 md:col-span-5 lg:col-auto flex items-center"
      onMouseEnter={() => indexFunction(undefined)}
    >
      <div className="cursor-pointer">
        <Image src={logo} alt={'Matter'} />
      </div>
    </div>
  );
};

export default NavbarLogo;
