type ValueWithUnit<Unit> = {
  value: number;
  unit: Unit;
};

type DistanceUnit = "METERS" | "KILOMETERS";
type Distance = ValueWithUnit<DistanceUnit>;

type DurationUnit = "SECONDS" | "MINUTES" | "HOURS";
type Duration = ValueWithUnit<DurationUnit>;

type SpeedUnit = "METERS_PER_SECONDS" | "KILOMETERS_PER_HOUR";
type Speed = ValueWithUnit<SpeedUnit>;

const distanceConversionTable: Record<DistanceUnit, Record<DistanceUnit, number>> = {
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
    value: value * distanceConversionTable[from][to],
    unit: to,
  };
};

const durationConversionTable: Record<DurationUnit, Record<DurationUnit, number>> = {
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
    value: value * durationConversionTable[from][to],
    unit: to,
  };
};

type RequiredUnitsForSpeed = {
  distance: DistanceUnit;
  duration: DurationUnit;
};

const requiredUnits: Record<SpeedUnit, RequiredUnitsForSpeed> = {
  KILOMETERS_PER_HOUR: {
    distance: "KILOMETERS",
    duration: "HOURS",
  },
  METERS_PER_SECONDS: {
    distance: "METERS",
    duration: "SECONDS",
  },
};

const computeSpeed = (distance: Distance, duration: Duration, unit: SpeedUnit): Speed => {
  const { distance: distanceUnit, duration: durationUnit } = requiredUnits[unit];
  const distanceInTargetUnit = convertDistance(distance, distanceUnit);
  const durationInTargetUnit = convertDuration(duration, durationUnit);
  return {
    value: distanceInTargetUnit.value / durationInTargetUnit.value,
    unit,
  };
};

export default computeSpeed;
