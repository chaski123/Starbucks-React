import React from "react";
import "../css/styles.css";
import LOGO from '../img/starbucks.png'
import BtnHeader from "./BtnHeader";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-container__logo">
        <link
        rel="stylesheet"
        href="/ruta/absoluta/hacia/bootstrap-icons.css"
        />
          <img
            className="header-container__img"
            src={LOGO}
            alt="Logo-png"
          />
        </div>
        <nav className="header-nav">
          <BtnHeader class={'header-nav__link'} content={'Inicio'} href={'#'}/>
          <BtnHeader class={'header-nav__link'} content={'Cafe'} href={'#'}/>
          <BtnHeader class={'header-nav__link'} content={'Sobre Nosotros'} href={'#'}/>
          <BtnHeader class={'header-nav__link'} content={'Delivery'} href={'#'}/>
        </nav>
        <div className="header-login">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="header-container__user__mobile">
          <i className="bi bi-list"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
