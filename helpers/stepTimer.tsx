import { TimeType } from "@/types/Time";
export const stepTimer = (step: TimeType) => {
  if (step.miliseconds + step.interval > 999) {
    step.miliseconds = 0;
    step.seconds = step.seconds + 1;
  } else {
    step.miliseconds = step.miliseconds + step.interval;
  }
  if (step.seconds > 59) {
    step.seconds = 0;
    step.minutes = step.minutes + 1;
  }
  if (step.minutes > 59) {
    step.minutes = 0;
    step.hours = step.hours + 1;
  }
};
