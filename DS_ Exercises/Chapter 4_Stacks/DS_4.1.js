/* 1. A stack can be used to ensure that an arithmetic expression has balanced parentheses.
Write a function that takes an arithmetic expression as an argument and
returns the postion in the expression where a parenthesis is missing. An example
of an arithmetic expression with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159
* .24.*/

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
    }
}

//Push function declared, incrementing the top variable so that the new top is the next empty position in the array
function push(element) {
    this.dataStore[this.top++] = element;
}

//Push function returns the element in the top position and decrements top variable
function pop() {
    return this.dataStore[--this.top];
}

//Returns the top element of the stack by accessing the element at the top -1 position
function peek() {
    return this.dataStore[this.top - 1];
}

//Declares the number of elements stored in a stack
function length() {
    return this.top;
}

//Stack cleared by setting the top variable to 0
class clear {
    constructor() {
        this.top = 0;
    }
}

// Javascript program for checking
// balanced brackets

// Function to check if brackets are balanced
function areBracketsBalanced(expr) {

    // Using ArrayDeque is faster than using Stack class
    let stack = [];

    // Traversing the Expression
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {

            // Push the element in the stack
            stack.push(x);
            continue;
        }

        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    // Check Empty Stack
    return (stack.length == 0);
}

// Driver code
let expr = "2.3 + 23 / 12 + (3.14159 * .24";

// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");

