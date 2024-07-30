function add(numbers) {
    if(numbers.length == 0) {
        return 0;
    }
    try {
        let del="";
        if (numbers.startsWith("//[")) {
            var flag=1;
            let i=3;
            while(numbers[i]!=']'){
                del+=numbers[i];
                i++;
            }            //taking delemiter from string
        }
        
        else if (numbers.startsWith("//")) {
            flag=0;
            del = numbers[2];           //taking delemiter from string
        }
        else{
            del=",";
        }
        const operands = numbers.split(new RegExp(`${del.replace(/\*/g, '\\*')}|\n`)); // all numbers are stored separately if separators are delimiter specified or new line
        if(flag){
            operands.shift();
            operands.shift();
        }
        else if(del!=','){
            operands.shift(); // remove the delemiter part from operands
        }
        console.log(operands);
        let sum = 0;

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

var input = "//[***]\n1***2***3";
console.log("Sum: " + add(input));
