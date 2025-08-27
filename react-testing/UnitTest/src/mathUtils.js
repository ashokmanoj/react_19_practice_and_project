//Factorial

export function factorial(n) {
    if (n < 0) {
        throw new Error("Negative numbers do not have a factorial.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

//Greatest Common Divisor (GCD)

export function gcd(a, b) {
    if (b === 0) {
        return Math.abs(a);
    }
    return gcd(b, a % b);
}

//fibonacci

export function fibonacci(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed.");
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}