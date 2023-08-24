import React from "react";
import IMG_1 from "../img/card-1.png"
import IMG_2 from "../img/card-2.png";
import IMG_3 from "../img/card-3.png";
import IMG_4 from "../img/card-4.png";
import Card from "./Card";
import "../css/styles.css";

const Cards = () =>{
    return(
        <>
            <Card src={IMG_1} circle={'5%'} description={'Ahorre tiempo con click & collect y recolecte sus estrellas. Hacer un pedido nunca ha sido tan facil.'}/>
            <Card src={IMG_2} circle={'10%'} description={'Starbucks entrega su comida y bebida en la puerta de su casa.'}/>
            <Card src={IMG_3} circle={''} description={'Mantengase informado de nuestras ultimas novedades y actualizaciones.'}/>
            <Card src={IMG_4} circle={''} description={'Descubra nuestra empresa y nuestra historia.'}/>
        </>
    )
}

export default Cards