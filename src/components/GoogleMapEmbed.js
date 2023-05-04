import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div style={{ width: '100%', height: '418px', overflow: 'hidden' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18596.421601357106!2d18.60537303890766!3d54.36488480008461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x46fd73032b9e8c0f%3A0xd53d81c3e8f2c6d7!2zQmF6eWxpa2EgxZt3LiBNaWtvxYJhamEsIMWad2nEmXRvamHFhHNrYSwgR2RhxYRzaw!3m2!1d54.352141599999996!2d18.6515269!4m5!1s0x46fd74eb67bb6c25%3A0xb089909296b1b2f6!2sStefana%20Batorego%2028%2C%2080-251%20Gda%C5%84sk!3m2!1d54.3775328!2d18.5992438!5e0!3m2!1sen!2spl!4v1683222542491!5m2!1sen!2spl"
        width="100%"
        height="418px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapEmbed;
