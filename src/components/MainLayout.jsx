import Navbar from './nav/NavBar';
import { MainContent } from './mainlayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={MainContent}>{children}</main>
    </>
  );
};
export default MainLayout;
