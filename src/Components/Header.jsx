import React from "react";
import "../css/styles.css";
import LOGO from '../img/starbucks.png'
import BtnHeader from "./BtnHeader";
import { ListIcon, UserIcon } from "../assets";

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
          <UserIcon className="IconUser"/>
        </div>
        <div className="header-container__user__mobile">
          <ListIcon className="Icon"/>
        </div>
      </header>
    </>
  );
};

export default Header;
