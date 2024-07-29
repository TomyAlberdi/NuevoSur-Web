import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Mobile/MobileNavbar/MobileNavbar";
import LeftMenu from "@/Mobile/Menus/LeftMenu";
import RightMenu from "@/Mobile/Menus/RightMenu";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <MobileNavbar />
      <LeftMenu />
      <RightMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
