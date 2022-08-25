import { Distance, DistanceUnit } from "..";

const conversionTable: Record<DistanceUnit, Record<DistanceUnit, number>> = {
  METERS: {
    METERS: 1,
    KILOMETERS: 1 / 1000,
  },
  KILOMETERS: {
    METERS: 1000,
    KILOMETERS: 1,
  },
};

const convertDistance = ({ value, unit: from }: Distance, to: DistanceUnit): Distance => {
  return {
    value: value * conversionTable[from][to],
    unit: to,
  };
};

export default convertDistance;
