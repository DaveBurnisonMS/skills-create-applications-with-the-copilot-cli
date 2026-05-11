/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + Addition       – adds two numbers
 *   - Subtraction    – subtracts the second number from the first
 *   * Multiplication – multiplies two numbers
 *   / Division       – divides the first number by the second (with division-by-zero handling)
 *   % Modulo         – returns the remainder of dividing the first number by the second
 *   ^ Exponentiation – raises the first number to the power of the second
 *   sqrt Square Root – returns the square root of a number (single operand)
 *
 * Usage:
 *   node calculator.js <number> <operator> <number>
 *   node calculator.js sqrt <number>
 *   Example: node calculator.js 10 + 5
 *   Example: node calculator.js sqrt 16
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

// Modulo – returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation – raises base to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root – returns the square root of n
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
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
    case "%":
      return modulo(num1, num2);
    case "^":
      return power(num1, num2);
    case "sqrt":
      return squareRoot(num1);
    default:
      throw new Error(`Unknown operator '${operator}'. Supported operators: + - * / % ^ sqrt`);
  }
}

// CLI entry point – only runs when executed directly
if (require.main === module) {
  const args = process.argv.slice(2);

  // Handle sqrt as a single-operand command: node calculator.js sqrt <number>
  if (args[0] === "sqrt") {
    if (args.length !== 2) {
      console.log("Usage: node calculator.js sqrt <number>");
      process.exit(1);
    }
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error("Error: Operand must be a valid number.");
      process.exit(1);
    }
    try {
      const result = squareRoot(n);
      console.log(`sqrt(${n}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  if (args.length !== 3) {
    console.log("Usage: node calculator.js <number> <operator> <number>");
    console.log("       node calculator.js sqrt <number>");
    console.log("Operators: + - * / % ^");
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
