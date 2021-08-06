
function farenheitToCelcius(farenheit){
    var celcius = (farenheit - 32) * 5/9;
    return celcius;
}

var myCelcius = farenheitToCelcius(54);
console.log(myCelcius);