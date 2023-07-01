import React from 'react';
import '../styles/popup.css';

const Popup = ({ isOpen, closePopup }) => {
  return (
    <div className={`popup ${isOpen ? 'popup_open' : ''}`}>
      <div className="popup__inner">
        <h2>Ważna informacja</h2><br/>
        <p>
            Cześć, zdecydowaliśmy się przełożyć ślub i wesele na przyszły rok. <br/>
            W związku z tym nasza strona internetowa będzie aktywna do <b>12.11.2023</b>, 
            a adres nowej strony pojawi się wraz z zaproszeniem.
        </p>
        <p>
            <br/>
            Dziękujemy za zrozumienie &#128153; <br/>
            Julia i Grzegorz
        </p>
        <br/>
        <button onClick={closePopup}>Zamknij</button>
      </div>
    </div>
  );
};

export default Popup;
