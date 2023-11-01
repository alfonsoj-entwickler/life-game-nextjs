import { useState, useEffect } from "react";
import { useLayerConfig } from "@/context/useLayerConfig";
import { formatNumberDigits } from "@/helpers/formatNumberDigits";
import { TimeType } from "@/types/Time";

const CountUp = () => {
  const [timer, setTimer] = useState<TimeType>({
    id: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
    interval: 250,
  });
  const [message, setMessage] = useState<string>("00 : 00 : 00");
  const { stateWorld } = useLayerConfig();

  const countUp = () => {
    let hours = timer.hours,
      minutes = timer.minutes,
      seconds = timer.seconds,
      miliseconds = timer.miliseconds,
      interval = timer.interval;

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

      setMessage(
        `${formatNumberDigits(hours)} : ${formatNumberDigits(
          minutes
        )} : ${formatNumberDigits(seconds)}`
      );

      setTimer({
        ...timer,
        id: Number(loopTime),
        hours,
        minutes,
        seconds,
        miliseconds,
      });
    }, interval);
  };

  useEffect(() => {
    if (stateWorld) {
      countUp();
    } else {
      clearInterval(timer.id);
    }
  }, [stateWorld]);

  return <p className="text-2xl">{message}</p>;
};

export default CountUp;
