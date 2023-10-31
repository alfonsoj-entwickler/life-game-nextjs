import { useState, useEffect } from "react";
import { useLayerConfig } from "@/context/useLayerConfig";
import { formatNumberDigits } from "@/helpers/formatNumberDigits";
import { TimeType } from "@/types/Time";

const CountUp = () => {
  const [useCountUp, setCountUp] = useState<TimeType>({
    id: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
    interval: 250,
  });
  const [useIntervalId, setIntervalId] = useState<number | undefined>();
  const [useTime, setTime] = useState<string>("00 : 00 : 00");
  const { stateWorld } = useLayerConfig();

  const countUp = () => {
    let hours = useCountUp.hours,
      minutes = useCountUp.minutes,
      seconds = useCountUp.seconds,
      miliseconds = useCountUp.miliseconds,
      interval = useCountUp.interval;

    const loopTime = setInterval(() => {
      if (miliseconds + interval > 999) {
        miliseconds = 0;
        seconds++;
      } else {
        miliseconds = miliseconds + interval;
      }
      if (seconds > 59) {
        seconds = 0;
        minutes++;
      }
      if (minutes > 59) {
        minutes = 0;
        hours++;
      }
      setTime(
        `${formatNumberDigits(hours)} : ${formatNumberDigits(
          minutes
        )} : ${formatNumberDigits(seconds)}`
      );
    }, interval);
    return loopTime;
  };

  useEffect(() => {
    if(stateWorld) {
      setIntervalId(countUp())
      console.log('Iniciar TimeUp', useIntervalId)
    }
    else {
      console.log('Stop TimeUp', useIntervalId)
      clearInterval(useIntervalId)
      
    }
   
  }, [stateWorld]);

  return <p className="text-2xl">{useTime}</p>;
};

export default CountUp;
