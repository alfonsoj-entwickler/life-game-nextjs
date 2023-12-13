import { useState, useEffect } from "react";
import { useLayerConfig } from "@/context/useLayerConfig";
import { useActionConfig } from "@/context/useActionConfig";
import { formatNumberDigits } from "@/helpers/formatNumberDigits";
import { stepTimer } from "@/helpers/stepTimer";
 
import { getRulesTransitions } from "@/helpers/getRulesTransitions";

const CountUp = () => {
  const [message, setMessage] = useState<string>("00 : 00 : 00");
  const { stateWorld, stateClock, setClock } = useLayerConfig();
  const { cells, updateActiveCell } = useActionConfig();

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

  useEffect(()=> {
    if(cells) {
      updateActiveCell(getRulesTransitions(cells));
    }
  }, [stateClock.time.seconds])

  return <p className="flex justify-center items-center">
    <span className="w-[10rem] py-1 text-2xl border-4 border-black bg-white/50">{message}</span>
  </p>;
};

export default CountUp;
