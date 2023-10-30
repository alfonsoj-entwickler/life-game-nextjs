import { useState, useEffect } from "react";
import { useLayerConfig } from "@/context/useLayerConfig";
import { formatNumberDigits } from "@/helpers/formatNumberDigits";

const CountUp = () => {
  const [useTime, setTime] = useState("00 : 00 : 00");
  useEffect(() => {
    const countUp = () => {
      let hours = 0,
        minutes = 0,
        seconds = 0,
        miliseconds = 0,
        interval = 250;
 
        setInterval(() => {
            if(miliseconds + interval > 999){
                miliseconds = 0;
                seconds++;
            }
            else {
                miliseconds = miliseconds + interval
            }
            if(seconds > 59) {
                seconds = 0;
                minutes++;
            } 
        setTime(`00 : ${formatNumberDigits(minutes)} : ${formatNumberDigits(seconds)}`);
      }, interval);
    };

    countUp();
  }, []);
  const { stateWorld } = useLayerConfig();
  return <p className="text-2xl">{useTime}</p>;
};

export default CountUp;
