const fs = require('fs');
fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // Initialize sum to 0
    let sum = 0;
    
    // lines from input file 
    const inputRows = data.split('\n');

    inputRows.forEach(rowNumbers => {
        let numbers = extractNumbers(rowNumbers);
        sum += numbers;
    });
    
    console.log(sum);
    // Output 56108 
});

// Functions
function extractNumbers(str) {
    let numbersFound = str.match(/\d/g);
    if (numbersFound == null) {
        return 0;
    } else if (numbersFound.length == 1) {
        return parseInt(numbersFound[0] + numbersFound[0]);
    } else {
        return parseInt(numbersFound[0] + numbersFound[numbersFound.length - 1]);
    }
}