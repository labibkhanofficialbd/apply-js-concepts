
// const number = 4

// console.log(number % 2);

 

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const myNumber = 145;
const isMyNumberEven = isEven(myNumber);

console.log(isMyNumberEven);

// is Odd Function 

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
 
console.log(isMyNumberOdd);