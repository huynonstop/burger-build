const MainLayout = ({ children }) => {
  return (
    <>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
