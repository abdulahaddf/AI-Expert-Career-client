import moment from 'moment';
import { useState, useEffect } from 'react';

const CountdownTimer = ({ time }) => {
  const [countdown, setCountdown] = useState('');
  console.log(time);
  useEffect(() => {
    // Set the target date and time in Bangladeshi time and date format
    const targetDate = moment(time, 'YYYY-MM-DD HH:mm:ss').utcOffset('+06:00');

    const interval = setInterval(() => {
      const now = moment().utcOffset('+06:00');
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        // Countdown reached its target
        setCountdown('Countdown Finished');
        clearInterval(interval);
      } else {
        // Calculate remaining time
        const duration = moment.duration(targetDate.diff(now));
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        // Format the countdown string in Bangladeshi format
        // const countdownString = `${days} , ${hours} , ${minutes} , ${seconds} `;
        const timeBox = {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        }


        setCountdown(timeBox);
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, [time]);

  return (
    <div>
      <p></p>
      <div className="flex  py-8 rounded-xl justify-around bg-[#161824] text-white mt-5 lg:mt-0">
        <div className="text-center">
          <h2 className="text-4xl text-[#ff0040]">
            {countdown.days}
          </h2>
          <span>day</span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl text-[#ff0040]">
            {countdown.hours}
          </h2>
          <span>hour</span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl text-[#ff0040]">
            {countdown.minutes}
          </h2>
          <span>minute</span>
        </div>

        <div className="text-center">
          <h2 className="text-4xl text-[#ff0040]">
            {countdown.seconds}
          </h2>
          <span>sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;