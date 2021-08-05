
function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}


var inch = 132;
var feet = inchToFeet(inch);

console.log(feet);


// mile to km 
function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKm(26.2);
console.log('Marathon In Km:', marathon);