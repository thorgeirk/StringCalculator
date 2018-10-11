const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
  expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("should sumerize multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

it("should handle new lines and commas between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should throw an error message along with all negative numbers in the set", () => {
  function CheckForNeg() {
    add("1\n2,3,-2,-3");
  }
  expect(CheckForNeg).toThrowError("Negatives not allowed: -2,-3");
});

it("should ignore numbers bigger than 1000", () => {
  expect(add("1001,2")).toBe(2);
});

it("should display a delimiter", () => {
  expect(add("//;\n1;2")).toBe(";");
});
