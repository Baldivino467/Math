// Factorial function
function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Permutation function
function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}

// Combination function
function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Permutation with repetition function
function permutationWithRepetition(n, r) {
    return Math.pow(n, r);
}

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/'];
let operation = null;

buttons.forEach((item) => {
    item.onclick = () => {
        // to clear
        if (item.id == 'clear') {
            display.innerText = '';
        }

        // to delete a string or number
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }

        // Factorial
        else if (item.id == 'factorial') {
            operation = 'factorial';
            display.innerText += '!';
        }

        // Permutation
        else if (item.id == 'permutation') {
            operation = 'permutation';
            display.innerText += 'P';
        }

        // Combination
        else if (item.id == 'combination') {
            operation = 'combination';
            display.innerText += 'C';
        }

        // Permutation with repetition
        else if (item.id == 'repetition') {
            operation = 'repetition';
            display.innerText += 'R';
        }

        // Comma
        else if (item.id == 'comma') {
            display.innerText += ',';
        }

        // Equal
        else if (item.id == 'equal') {
            let [n, r] = display.innerText.split(',');
            n = parseInt(n);
            r = parseInt(r);

            if (n > 15 || r > 15) {
                display.innerText = 'Must not exceed 15';
                setTimeout(() => (display.innerText = ''), 2000);
            } else {
                switch (operation) {
                    case 'factorial':
                        display.innerText = factorial(n);
                        break;
                    case 'permutation':
                        display.innerText = permutation(n, r);
                        break;
                    case 'combination':
                        display.innerText = combination(n, r);
                        break;
                    case 'repetition':
                        display.innerText = permutationWithRepetition(n, r);
                        break;
                    default:
                        // Handle other operations
                        break;
                }
            }

            operation = null;  // Reset the operation
        }

        // display
        else {
            // check if the last character is an operator
            let lastChar = display.innerText[display.innerText.length - 1];
            if (operators.includes(lastChar) && operators.includes(item.id)) {
                // replace the last operator with the new one
                display.innerText = display.innerText.slice(0, -1) + item.id;
            } else {
                display.innerText += item.id;
            }
        }
    }
});

// to change the theme
const themeTogglebtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');
let isDark = true;
themeTogglebtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeTogglebtn.classList.toggle('active');
    isDark = !isDark;
}
