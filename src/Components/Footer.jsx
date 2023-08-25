import React from "react";
import LinksFooter from "./LinksFooter";
import { Facebook, Twitter, WhatsApp } from "../assets";
import "../css/styles.css";

const Footer = () =>{
    const estilo = {
        width: '25px',
        height: '25px'
    }
    return(
        <footer className="footer-container">
        <div className="footer-container__login">
            <LinksFooter class={'footer-container__link'} content={'Iniciar Sesion'} href={'#'}/>
            <LinksFooter class={'footer-container__link'} content={'Registrate'} href={'#'}/>
        </div>
        <div className="footer-container__redes-sociales">
            <i className="bi bi-whatsapp whatsapp"><LinksFooter class={'footer-container__link'} content={<WhatsApp className="WhatsAppIcon" style={estilo}/>} href={'https://www.whatsapp.com/?lang=es'}/></i>
            <i className="bi bi-facebook facebook"><LinksFooter class={'footer-container__link'} content={<Facebook className="FacebookIcon" style={estilo}/>} href={'https://es-la.facebook.com/'}/> </i>
            <i className="bi bi-twitter twitter"><LinksFooter class={'footer-container__link'} content={<Twitter className="TwitterIcon" style={estilo}/>} href={'https://twitter.com/?lang=es'}/></i>
        </div>
        <div className="footer-container__contacto">
            <LinksFooter class={'footer-container__link'} content={'Contactanos Aqui'} href={'#'}/>
        </div>
    </footer>
    )
}

export default Footer