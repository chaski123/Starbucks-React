import React from "react";
import "../css/styles.css";

const Card = (props) =>{
    return (
        <section className="cards-container">
            <article className="card">
                <img className="card__img" src={props.src} alt="Img1"/>
                <div className="cards__container-text">
                    <h3 className="card__titulo">Aplicacion <span>Starbucks</span></h3>
                    <p className="card__parrafo">{props.description}
                    </p>
                    <button className="card__button">Pruebelo</button>
                </div>
            </article>
        </section>
    )
}

export default Card