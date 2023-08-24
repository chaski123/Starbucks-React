import React from "react";
import LinksFooter from "./LinksFooter";
import "../css/styles.css";

const Footer = () =>{
    return(
        <footer className="footer-container">
        <div className="footer-container__login">
            <LinksFooter class={'footer-container__link'} content={'Iniciar Sesion'} href={'#'}/>
            <LinksFooter class={'footer-container__link'} content={'Registrate'} href={'#'}/>
        </div>
        <div className="footer-container__redes-sociales">
            <i className="bi bi-whatsapp whatsapp"><LinksFooter class={'footer-container__link'} content={'Whatsapp'} href={'https://www.whatsapp.com/?lang=es'}/></i>
            <i className="bi bi-facebook facebook"><LinksFooter class={'footer-container__link'} content={'Facebook'} href={'https://es-la.facebook.com/'}/> </i>
            <i className="bi bi-twitter twitter"><LinksFooter class={'footer-container__link'} content={'Twitter'} href={'https://twitter.com/?lang=es'}/></i>
        </div>
        <div className="footer-container__contacto">
            <LinksFooter class={'footer-container__link'} content={'Contactanos Aqui'} href={'#'}/>
        </div>
    </footer>
    )
}

export default Footer