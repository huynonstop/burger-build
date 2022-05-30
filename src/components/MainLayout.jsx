import Navbar from './nav/NavBar';
import { MainContent, Footer } from './mainlayout.module.css';
import SideDraw from './nav/SideDraw';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const [showSideDraw, setShowSideDraw] = useState(false);

  return (
    <>
      <Navbar openSideDraw={() => setShowSideDraw(true)} />
      <SideDraw show={showSideDraw} close={() => setShowSideDraw(false)} />
      <main className={MainContent}>{children || <Outlet />}</main>
      <footer className={Footer}>
        <p>Burger builder - huynonstop - Built with ReactJS</p>
      </footer>
    </>
  );
};
export default MainLayout;
