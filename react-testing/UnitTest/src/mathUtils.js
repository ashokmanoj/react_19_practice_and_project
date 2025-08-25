//add munbers

export const add = (a, b) => a + b;

//subtract numbers

export const subtract = (a, b) => a - b;


//multiply numbers

export const multiply = (a, b) => a * b;


//divide numbers

export const divide = (a, b) =>{
    if(b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};