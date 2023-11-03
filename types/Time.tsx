export type IntervalType = {
  id: number | undefined;
  time: TimeType;
}

export type TimeType = {
  hours: number;
  minutes: number;
  seconds: number;
  miliseconds: number;
  interval: number;
};
