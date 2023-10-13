import { Outlet } from "react-router-dom";
import MainFooter from "../Footer";
import MainHeader from "../Header";

function Layout() {
  return (
    <>
      <MainHeader/>
      <Outlet />
      <MainFooter />
    </>
  );
}

export default Layout;
