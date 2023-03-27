import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_l4ygn7g', 
        'template_38q95da', 
        form.current, 
        '1kPzQUU9Hkm0OMsas')
        e.target.reset()
    };
	
	return (	
        <section className="contact section" id="contact">
            <h2 className="section-title">Kontakt</h2>
            <span className="section-subtitle">Skontaktuj się z nami</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Pogadaj z nami</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">jg.pozorscy@gmail.com</span>

                            <a href="mailto:jg.pozorscy@gmail.com" className="contact__button">
                                Napisz do nas{" "}
                                <i className="bx bx-right-arrow-alt
                                contact__button-icon"></i>
                            </a>
                        </div>
{/* 
                        <div className="contact__card">
                            <i className="bx bx-user contact__card-icon"></i>
                            <h3 className="contact__card-title">Julia</h3>

                            <div className="contact__card-info">
                                <i className="bx bxl-messenger contact__card-icon-small"></i>
                                <span className="contact__card-data">Messenger</span>
                            </div>
                                <a href="" className="contact__button">
                                    Napisz do Julii{" "}
                                    <i className="bx bx-right-arrow-alt
                                    contact__button-icon"></i>
                                </a>
                            <div className="contact__card-info">
                                <i className="bx bxs-phone contact__card-icon-small"></i>
                                <span className="contact__card-data">Telefon</span>
                            </div>
                                <a href="" className="contact__button">
                                    Zobacz nr. tel.{" "}
                                </a>
                            
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-user contact__card-icon"></i>

                            <h3 className="contact__card-title">Grześ</h3>
                            <div className="contact__card-info">
                                <i className="bx bxl-messenger contact__card-icon-small"></i>
                                <span className="contact__card-data">Messenger</span>
                            </div>
                            <a href="" className="contact__button">
                                Napisz do Grzesia{" "}
                                <i className="bx bx-right-arrow-alt
                                contact__button-icon"></i>
                            </a>
                            <div className="contact__card-info">

                                <i className="bx bxs-phone contact__card-icon-small"></i>
                                <span className="contact__card-data">Telefon</span>
                            </div>
                            <a href="" className="contact__button">
                                Zobacz nr. tel.{" "}
                            </a>
                        </div> */}
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Napisz do nas wiadomość</h3>

                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Imię</label>
                            <input 
                                type="text" 
                                name="name"
                                className="contact__form-input"
                                placeholder="Wpisz swoje imię"
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input 
                                type="email" 
                                name="email"
                                className="contact__form-input"
                                placeholder="Wpisz swój adres"
                            />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Wiadomość</label>
                            <textarea 
                                name="message" 
                                cols="30" 
                                rows="10"
                                className="contact__form-input" 
                                placeholder="Twoja wiadomość">
                            </textarea>
                        </div>

                        <button className="button button--flex">
                            Wyślij wiadomość
                            <i className="uil uil-location-arrow button__icon"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact