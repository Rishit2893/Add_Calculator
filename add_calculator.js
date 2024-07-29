function add(numbers){
    try{
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
            if(element<0){
                throw new Error("Negative numbers not allowed: " + element);
            }
            sum+=parseInt(element); // each number is added 
        });
        return sum;
    }
    catch(error){
        console.log(error);
    }
}
var input = "//;1\n2;3;-4;5";
console.log("Sum: " + add(input));