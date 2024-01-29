const Calculator = {
    operand1: 0,
    operand2: 0,

    setOperands: function (operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    },

    add: function () {
        return this.operand1 + this.operand2;
    },

    subtract: function () {
        return this.operand1 - this.operand2;
    },

    multiply: function () {
        return this.operand1 * this.operand2;
    },

    divide: function () {
        if (this.operand2 === 0) {
            return "Error: Cannot divide by zero.";
        } else {
            return this.operand1 / this.operand2;
        }
    }
};


Calculator.setOperands(5, 2);

console.log(Calculator.add());
console.log(Calculator.subtract());
console.log(Calculator.multiply());
console.log(Calculator.divide());

Calculator.setOperands(10, 0);
console.log(Calculator.divide());
