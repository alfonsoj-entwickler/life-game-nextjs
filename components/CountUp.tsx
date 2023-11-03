import { useState, useEffect } from "react";
import { useLayerConfig } from "@/context/useLayerConfig";
import { formatNumberDigits } from "@/helpers/formatNumberDigits";
import { IntervalType } from "@/types/Time";
import { stepTimer } from "@/helpers/stepTimer";

const CountUp = () => {
  const [clock, setClock] = useState<IntervalType>({
    id: 0,
    time: {
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      interval: 250,
    },
  });
  const [message, setMessage] = useState<string>("00 : 00 : 00");
  const { stateWorld } = useLayerConfig();

  const countUp = () => {
    let my_counter = {
      hours: clock.time.hours,
      minutes: clock.time.minutes,
      seconds: clock.time.seconds,
      miliseconds: clock.time.miliseconds,
      interval: clock.time.interval,
    };

    const loopTime = setInterval(() => {
      stepTimer(my_counter);

      setMessage(
        `${formatNumberDigits(my_counter.hours)} : ${formatNumberDigits(
          my_counter.minutes
        )} : ${formatNumberDigits(my_counter.seconds)}`
      );

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
      clearInterval(clock.id);
    }
  }, [stateWorld]);

  return <p className="text-2xl">{message}</p>;
};

export default CountUp;
