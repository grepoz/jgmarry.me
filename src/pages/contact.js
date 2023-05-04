import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleMapEmbed from 'components/GoogleMapEmbed';

const Contact = () => {

    const notifyError = () => toast.error("Wpisz imię, mail treść wiadomości.");
    const notifySuccess = () => toast.success("Dziękujemy za wysłanie wiadomości.");
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if(form.current[0].value !== "" && form.current[1].value !== "" && form.current[2].value !== ""){
            emailjs.sendForm(
                'service_l4ygn7g', 
                'template_38q95da', 
                form.current, 
                '1kPzQUU9Hkm0OMsas');
            e.target.reset();

            notifySuccess();
        }
        else{
            notifyError();
        }
    };
	
	return (	
        <>
            <section className="contact section" id="contact">
                <h2 className="section-title">Kontakt</h2>
                <span className="section-subtitle">Skontaktuj się z nami</span>

                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Lokalizacja</h3>

                        <div className="contact__info">

                            <div className="contact__card" style={{height: "450px"}}>
                            <GoogleMapEmbed/>
                            </div>
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
        </>
    )
};

export default Contact