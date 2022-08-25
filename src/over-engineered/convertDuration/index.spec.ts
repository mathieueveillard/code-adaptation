import convertDuration from ".";
import { Duration } from "..";

describe("Test of convertDuration()", () => {
  test("convert minutes to seconds", () => {
    // GIVEN
    const input: Duration = {
      value: 1,
      unit: "MINUTES",
    };

    // WHEN
    const actual = convertDuration(input, "SECONDS");

    // THEN
    const expected: Duration = {
      value: 60,
      unit: "SECONDS",
    };
    expect(actual).toEqual(expected);
  });
});
