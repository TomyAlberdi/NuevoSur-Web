import React, { useContext } from "react";
import { MobileMenuContext } from "@/Hooks/MobileMenuContextComponent";
import { IoCloseCircle } from "react-icons/io5";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

const mockCart = [
  {
    id: 1,
    name: "Producto 1",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 20,
    quantity: 2,
  },
  {
    id: 3,
    name: "Producto 3",
    price: 30,
    quantity: 3,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 20,
    quantity: 2,
  },
  {
    id: 3,
    name: "Producto 3",
    price: 30,
    quantity: 3,
  }
];

const RightMenu = () => {
  const { RightMenuOpen, handleRightMenuOpen } = useContext(MobileMenuContext);
  const { user, isAuthenticated, login, register, logout } = useKindeAuth();

  return (
    <div className={"MobileMenu RightMenu" + (RightMenuOpen ? " open" : "")}>
      <section className="header">
        <img src="/NuevoSurIcon.png" onClick={handleRightMenuOpen} />
        <p className="bebas">Usuario</p>
        <div onClick={handleRightMenuOpen}>
          <IoCloseCircle />
        </div>
      </section>
      <section className="body">
        {isAuthenticated ? (
          <section className="topMenu auth">
            <div className="userInfo">
              <span className="userIcon">
                <FaUserAlt />
              </span>
              <p>{user?.family_name ? user?.family_name : "Nombre"}</p>
              <span className="settingsIcon">
                <IoIosSettings />
              </span>
            </div>
            <div className="closeSession" onClick={logout}>
              Cerrar Sesión
            </div>
          </section>
        ) : (
          <section className="topMenu noAuth">
            <div>Registrarse</div>
            <span>O</span>
            <div>Iniciar Sesión</div>
          </section>
        )}
        <section className={"botMenu" + (isAuthenticated ? " auth" : " noAuth")}>
          <h3 className="bebas">
            Mi carrito <FaCartShopping />
          </h3>
          <div className={"cart" + (isAuthenticated ? " auth" : " noAuth")}>
            {isAuthenticated ? (
              <>
                <article className="item guide">
                  <p className="div1">Item</p>
                  <p className="div2">Cantidad</p>
                  <p className="div3">Precio</p>
                </article>
                {mockCart.length > 0 ? (
                  mockCart.map((item, index) => (
                    <article className="item" key={index}>
                      <p className="div1">{item.name}</p>
                      <p className="div2">{item.quantity}</p>
                      <p className="div3">{item.price}</p>
                    </article>
                  ))
                ) : (
                  <p className="emptyMessage">
                    No tienes productos en tu carrito
                  </p>
                )}
                <article className="item total">
                  <p className="div1">Total</p>
                  <p className="div3">$0</p>
                </article>
              </>
            ) : (
              <p>Inicie sesión para usar su carrito</p>
            )}
            <div className="buyButton">Comprar</div>
          </div>
          {isAuthenticated ? (
            <div className="emptyButton">
              <span>Vaciar carrito</span>
              <FaTrash />
            </div>
          ) : null}
        </section>
      </section>
    </div>
  );
};

export default RightMenu;
