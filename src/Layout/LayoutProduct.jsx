import { Outlet } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="LayoutProduct">
      <section className="productHeader">
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack  />
          Volver
        </button>
      </section>
      <Outlet />
    </div>
  );
};

export default Layout;
