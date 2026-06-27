class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        console.log(this.a + this.b);
        // return this.a + this.b;
    }

    subtraction() {
        if (this.a >= this.b) {
            console.log(this.a - this.b);
            // return this.a - this.b;
        } else {
            console.log(this.b - this.a);
            // return this.b - this.a;
        }
    }

    modulus() {
        if (this.a >= this.b) {
            console.log(this.a % this.b);
            // return this.a % this.b;
        } else {
            console.log(this.b % this.a);
            // return this.b % this.a;
        }
    }

    division() {
        if (this.a >= this.b) {
            console.log(this.a / this.b);
            // return this.a / this.b;
        } else {
            console.log(this.b / this.a);
            // return this.b / this.a;
        }
    }

    multiplication() {
        console.log(this.a * this.b);
        // return this.a * this.b;
    }

}

let cal = new Calculator(12, 10);
cal.sum();
cal.subtraction();
cal.modulus();
cal.division();
cal.multiplication();