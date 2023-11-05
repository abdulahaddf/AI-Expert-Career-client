/* eslint-disable react/prop-types */
import moment from "moment";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MyContext } from "../../../../Context/Context";




const CountDown = ({startDate,endDate }) => {
    const [countdown, setCountdown] = useState('');
    const { language } = useContext(MyContext);
    const [coming, setComing]= useState(true);
  

    
    useEffect(() => {
      // Set the target date and time in Bangladeshi time and date format
      const targetDate = moment(startDate, 'YYYY-MM-DD HH:mm:ss').utcOffset('+06:00');
      const nextTargetDate = moment(endDate, 'YYYY-MM-DD HH:mm:ss').utcOffset('+06:00');
  
      const interval = setInterval(() => {
        const now = moment().utcOffset('+06:00');
        const diff = targetDate.diff(now);
       
  
        if (diff <= 0) {
            const duration = moment.duration(nextTargetDate.diff(now));
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
    
            setComing(false)
            setCountdown(timeBox);
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
    }, [coming]);


    return (
        <div className="section my-10 ">
<div>
{coming ? <h3 className="text-xl font-bold my-3">  {language == "bn"
            ? "ভর্তি শুরু হবে:"
            : "Admission will be start on:"}</h3> : <h3 className="text-xl font-bold my-3">  {language == "bn"
            ? "ভর্তি শেষ হতে বাকি:"
            : "Admission is yet to be completed:"}</h3>}

</div>
<div className="grid grid-flow-col justify-evenly md:gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": countdown.days}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":countdown.hours}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":countdown.minutes}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-primary rounded-box text-white">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":countdown.seconds}}></span>
    </span>
    sec
  </div>
</div>



</div>
    );
};

export default CountDown;