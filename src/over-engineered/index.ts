import convertDistance from "./convertDistance";
import convertDuration from "./convertDuration";

type ValueWithUnit<Unit> = {
  value: number;
  unit: Unit;
};

export type DistanceUnit = "METERS" | "KILOMETERS";
export type Distance = ValueWithUnit<DistanceUnit>;

export type DurationUnit = "SECONDS" | "MINUTES" | "HOURS";
export type Duration = ValueWithUnit<DurationUnit>;

export type SpeedUnit = "METERS_PER_SECONDS" | "KILOMETERS_PER_HOUR";
export type Speed = ValueWithUnit<SpeedUnit>;

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
