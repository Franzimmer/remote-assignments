// Assignment 2: function calculate(args) - calculate the result ofthe passing object
function calculate(args){
    let result;
    if(args.op === '+') {
        result = args.n1 + args.n2;
    } else if(args.op === '-') {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}