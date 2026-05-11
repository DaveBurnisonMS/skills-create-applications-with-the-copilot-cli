/**
 * Node.js CLI Calculator
 *
 * Supported operations (basic arithmetic):
 *   + Addition       – adds two numbers
 *   - Subtraction    – subtracts the second number from the first
 *   * Multiplication – multiplies two numbers
 *   / Division       – divides the first number by the second (with division-by-zero handling)
 *
 * Usage:
 *   node calculator.js <number> <operator> <number>
 *   Example: node calculator.js 10 + 5
 */

// Addition – add two numbers
function add(a, b) {
  return a + b;
}

// Subtraction – subtract the second number from the first
function subtract(a, b) {
  return a - b;
}

// Multiplication – multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Division – divide the first number by the second
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Calculate result based on operator
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error(`Unknown operator '${operator}'. Supported operators: + - * /`);
  }
}

// CLI entry point – only runs when executed directly
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log("Usage: node calculator.js <number> <operator> <number>");
    console.log("Operators: + - * /");
    console.log("Example: node calculator.js 10 + 5");
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both operands must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
