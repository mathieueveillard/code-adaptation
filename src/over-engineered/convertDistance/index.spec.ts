import convertDistance from ".";
import { Distance } from "..";

describe("Test of convertDistance()", () => {
  test("convert meters to meters", () => {
    // GIVEN
    const input: Distance = {
      value: 1000,
      unit: "METERS",
    };

    // WHEN
    const actual = convertDistance(input, "METERS");

    // THEN
    const expected: Distance = {
      value: 1000,
      unit: "METERS",
    };
    expect(actual).toEqual(expected);
  });

  test("convert meters to kilometers", () => {
    // GIVEN
    const input: Distance = {
      value: 1000,
      unit: "METERS",
    };

    // WHEN
    const actual = convertDistance(input, "KILOMETERS");

    // THEN
    const expected: Distance = {
      value: 1,
      unit: "KILOMETERS",
    };
    expect(actual).toEqual(expected);
  });

  test("convert kilometers to meters", () => {
    // GIVEN
    const input: Distance = {
      value: 1,
      unit: "KILOMETERS",
    };

    // WHEN
    const actual = convertDistance(input, "METERS");

    // THEN
    const expected: Distance = {
      value: 1000,
      unit: "METERS",
    };
    expect(actual).toEqual(expected);
  });
});
