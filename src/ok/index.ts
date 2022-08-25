type ValueWithUnit<Unit> = {
  value: number;
  unit: Unit;
};

type Distance = ValueWithUnit<"KILOMETERS">;

type Duration = ValueWithUnit<"HOURS">;

type Speed = ValueWithUnit<"KILOMETERS_PER_HOUR">;

const computeSpeed = (distance: Distance, duration: Duration): Speed => {
  return {
    value: distance.value / duration.value,
    unit: "KILOMETERS_PER_HOUR",
  };
};

export default computeSpeed;
