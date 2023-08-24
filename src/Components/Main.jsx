import React from "react";
import MAIN from "../img/starbucks.png";
import "../css/styles.css";

const Main = () => {
  return (
    <main className="main-container">
      <div className="main-container__principal">
        <h1 className="main-container__titulo">
          No solo es Cafe es <span>Starbucks</span>
        </h1>
        <p className="main__description">
          Cada día, acudimos a trabajar con la esperanza de conseguir dos cosas:
          compartir el mejor café con nuestros amigos y contribuir a que el
          mundo sea un poco mejor. Así era cuando abrió la primera tienda
          Starbucks en 1971, y así continúa siendo hoy.
        </p>
      </div>
      <div className="main-container__logo">
        <img className="main-container__img" src={MAIN} alt="starbucks-logo" />
      </div>
    </main>
  );
};

export default Main;
