import { Duration, DurationUnit } from "..";

const conversionTable: Record<DurationUnit, Record<DurationUnit, number>> = {
  SECONDS: {
    SECONDS: 1,
    MINUTES: 1 / 60,
    HOURS: 1 / (60 * 60),
  },
  MINUTES: {
    SECONDS: 60,
    MINUTES: 1,
    HOURS: 1 / 60,
  },
  HOURS: {
    SECONDS: 60 * 60,
    MINUTES: 60,
    HOURS: 1,
  },
};

const convertDuration = ({ value, unit: from }: Duration, to: DurationUnit): Duration => {
  return {
    value: value * conversionTable[from][to],
    unit: to,
  };
};

export default convertDuration;
