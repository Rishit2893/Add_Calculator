function add(numbers){
    let del=',';
    if(numbers.startsWith("//")){
        del=numbers[2];
    }
    const operands = numbers.split(RegExp(`${del}|\n`));// all numbers are stored seperately if seperators are delemiter specified or new line
    if(del!=','){
        operands.shift(); // remove the delemiter part from operands
    }
    let sum=0;
    operands.forEach(element => {
        sum+=parseInt(element); // each number is added 
    });
    return sum;
}
var input = "//;1\n2;3;4;5";
console.log("Sum: " + add(input));