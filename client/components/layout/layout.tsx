import React, { ReactElement } from 'react';
import Navbar from '../navbar';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <main className="h-full mt-[120px] lg:mt-[80px]">{children}</main>
    </>
  );
};

export default Layout;
