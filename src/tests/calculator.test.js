const { add, subtract, multiply, divide, calculate } = require("../calculator");

// ─── Image examples: 2+3, 10-4, 45*2, 20/5 ───

describe("Image example operations", () => {
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));
});

// ─── Addition tests ───

describe("add()", () => {
  test("adds two positive numbers", () => expect(add(1, 2)).toBe(3));
  test("adds positive and negative", () => expect(add(5, -3)).toBe(2));
  test("adds two negative numbers", () => expect(add(-4, -6)).toBe(-10));
  test("adds zero", () => expect(add(7, 0)).toBe(7));
  test("adds decimal numbers", () => expect(add(1.5, 2.3)).toBeCloseTo(3.8));
  test("adds large numbers", () => expect(add(1000000, 2000000)).toBe(3000000));
});

// ─── Subtraction tests ───

describe("subtract()", () => {
  test("subtracts two positive numbers", () => expect(subtract(10, 4)).toBe(6));
  test("subtracts resulting in negative", () => expect(subtract(3, 8)).toBe(-5));
  test("subtracts negative numbers", () => expect(subtract(-2, -5)).toBe(3));
  test("subtracts zero", () => expect(subtract(9, 0)).toBe(9));
  test("subtracts from zero", () => expect(subtract(0, 5)).toBe(-5));
  test("subtracts decimals", () => expect(subtract(5.5, 2.2)).toBeCloseTo(3.3));
});

// ─── Multiplication tests ───

describe("multiply()", () => {
  test("multiplies two positive numbers", () => expect(multiply(6, 7)).toBe(42));
  test("multiplies by zero", () => expect(multiply(100, 0)).toBe(0));
  test("multiplies by one", () => expect(multiply(42, 1)).toBe(42));
  test("multiplies negative numbers", () => expect(multiply(-3, -4)).toBe(12));
  test("multiplies positive by negative", () => expect(multiply(5, -3)).toBe(-15));
  test("multiplies decimals", () => expect(multiply(2.5, 4)).toBe(10));
});

// ─── Division tests ───

describe("divide()", () => {
  test("divides evenly", () => expect(divide(20, 5)).toBe(4));
  test("divides with remainder", () => expect(divide(7, 2)).toBe(3.5));
  test("divides negative by positive", () => expect(divide(-10, 2)).toBe(-5));
  test("divides two negatives", () => expect(divide(-10, -2)).toBe(5));
  test("divides decimals", () => expect(divide(7.5, 2.5)).toBe(3));
  test("divides zero by number", () => expect(divide(0, 5)).toBe(0));
  test("throws on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ─── calculate() integration tests ───

describe("calculate()", () => {
  test("addition via calculate", () => expect(calculate(2, "+", 3)).toBe(5));
  test("subtraction via calculate", () => expect(calculate(10, "-", 4)).toBe(6));
  test("multiplication via calculate", () => expect(calculate(45, "*", 2)).toBe(90));
  test("division via calculate", () => expect(calculate(20, "/", 5)).toBe(4));
  test("throws on unknown operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Unknown operator '%'");
  });
  test("throws on division by zero via calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero");
  });
});
