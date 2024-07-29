function add(numbers) {
    try {
        let del = ',';
        if (numbers.startsWith("//")) {
            del = numbers[2];           //taking delemiter from string
        }
        const operands = numbers.split(new RegExp(`${del}|\n`)); // all numbers are stored separately if separators are delimiter specified or new line
        if(del!=','){
            operands.shift(); // remove the delemiter part from operands
        }
        let sum = 0;
        console.log(operands);
        let negativeNumbers = [];

        operands.forEach(element => {
            const num = parseInt(element);
            if (num < 0) 
                negativeNumbers.push(num);   //if negative no. add to list
            if(num<=1000)
                sum += num; // each number is added if less than 1000
        });

        if (negativeNumbers.length > 0) {
            throw new Error("Negative numbers not allowed: " + negativeNumbers.join(', '));
        }

        return sum;
    } catch (error) {
        console.log(error);
    }
}

var input = "//;1\n2;3;4;5000;6";
console.log("Sum: " + add(input));
