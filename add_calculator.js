function add(numbers){
    const operands=numbers.split(',');// all numbers are stored seperately
    let sum=0;
    operands.forEach(element => {
        sum+=parseInt(element); // each number is added 
    });
    return sum;
}
var input = "1,2,3,4,5";
console.log("Sum: " + add(input));