import { useState, useEffect } from "react";
import { useLayerConfig } from "@/context/useLayerConfig";
import { formatNumberDigits } from "@/helpers/formatNumberDigits";
import { stepTimer } from "@/helpers/stepTimer";

const CountUp = () => {
  const [message, setMessage] = useState<string>("00 : 00 : 00");
  const { stateWorld, stateClock, setClock } = useLayerConfig();

  const countUp = () => {
    let my_counter = {
      hours: stateClock.time.hours,
      minutes: stateClock.time.minutes,
      seconds: stateClock.time.seconds,
      miliseconds: stateClock.time.miliseconds,
      interval: stateClock.time.interval,
    };

    const loopTime = setInterval(() => {
      stepTimer(my_counter);

      setClock({
        id: Number(loopTime),
        time: {
          ...my_counter,
          hours: my_counter.hours,
          minutes: my_counter.minutes,
          seconds: my_counter.seconds,
          miliseconds: my_counter.miliseconds,
        },
      });
    }, my_counter.interval);
  };

  useEffect(() => {
    if (stateWorld) {
      countUp();
    } else {
      clearInterval(stateClock.id);
    }
  }, [stateWorld]);

  useEffect(() => {
    setMessage(
      `${formatNumberDigits(stateClock.time.hours)} : ${formatNumberDigits(
        stateClock.time.minutes
      )} : ${formatNumberDigits(stateClock.time.seconds)}`
    );
  }, [stateClock]);

  return <p className="text-2xl">{message}</p>;
};

export default CountUp;
