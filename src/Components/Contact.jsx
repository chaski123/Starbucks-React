import React from "react";
import "../css/styles.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact__titulo">Contactanos</h2>
      <form className="contact__form">
        <div className="contact__form-correo">
          <label className="contact__label">Correo Electronico</label>
          <input
            className="contact__input"
            type="mail"
            placeholder="Agregue su correo"
            required
          />
        </div>
        <div className="contact__form-textarea">
          <label className="contact__label">Mensaje</label>
          <textarea
            className="contact__input-mensaje"
            type="text"
            placeholder="Escriba su mensaje aqui..."
            required
            name=""
            id=""
            cols="25"
            rows="5"
          ></textarea>
        </div>
        <input className="contact__button" type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Contact;
