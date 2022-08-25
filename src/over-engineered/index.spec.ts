import computeSpeed, { Distance, Duration, Speed } from ".";

test("Test of computeSpeed()", () => {
  // GIVEN
  const distance: Distance = {
    value: 18,
    unit: "KILOMETERS",
  };
  const duration: Duration = {
    value: 1,
    unit: "HOURS",
  };

  // WHEN
  const actual = computeSpeed(distance, duration, "METERS_PER_SECONDS");

  // THEN
  const expected: Speed = {
    value: 5,
    unit: "METERS_PER_SECONDS",
  };
  expect(actual).toEqual(expected);
});
