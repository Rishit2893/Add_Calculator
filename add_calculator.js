function add(numbers){
    const operands = numbers.split(/,|\n/);// all numbers are stored seperately if seperators are , or new line
    let sum=0;
    operands.forEach(element => {
        sum+=parseInt(element); // each number is added 
    });
    return sum;
}
var input = "1\n2,3,4\n5";
console.log("Sum: " + add(input));