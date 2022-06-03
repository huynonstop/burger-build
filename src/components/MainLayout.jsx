import Navbar from './nav/Navbar';
import { MainContent, Footer } from './mainlayout.module.css';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={MainContent}>{children || <Outlet />}</main>
      <footer className={Footer}>
        <p>Burger builder - huynonstop - Built with ReactJS</p>
      </footer>
    </>
  );
};
export default MainLayout;
