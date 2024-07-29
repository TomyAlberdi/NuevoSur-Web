import { Outlet } from "react-router-dom";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import MobileNavbar from "@/Mobile/MobileNavbar/MobileNavbar";
import Menu from "@/Mobile/Menu/Menu";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <MobileNavbar />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
