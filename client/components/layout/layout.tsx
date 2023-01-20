import React, { ReactElement } from 'react';
import Copyright from '../copyright';
import Footer from '../footer';
import Header from '../header';
import Navbar from '../navbar';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Copyright />
    </>
  );
}
