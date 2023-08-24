import React from "react";
import GALLERY_1 from "../img/gallery-1.png";
import GALLERY_2 from "../img/gallery-2.png";
import GALLERY_3 from "../img/gallery-3.png";
import "../css/styles.css";

const Gallery = () =>{
    return(
        <section className="gallery-container">
            <img className="gallery-container__img" src={GALLERY_1} alt="Img1"/>
            <img className="gallery-container__img" src={GALLERY_2}alt="Img2"/>
            <img className="gallery-container__img" src={GALLERY_3} alt="Img3"/>
        </section>
)
}

export default Gallery