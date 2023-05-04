import React, { useState, useEffect } from 'react';
import "../styles/countdown.css";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2023-09-09T15:00:00');
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        return { days, hours, minutes };
      } else {
        return { days: 0, hours: 0, minutes: 0 };
      }
    };

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="cd-section" id="countdown">
			<span className="section-subtitle timer-subtitle">Widzimy się za</span>
			<h2 className="section-title">
        {timeLeft.days} dni <span style={{fontWeight: "normal"}}>|</span>&nbsp;
        {timeLeft.hours}{' '} godz <span style={{fontWeight: "normal"}}>|</span>&nbsp;
        {timeLeft.minutes} min
      </h2>
	</section>
  );
};

export default Countdown;
