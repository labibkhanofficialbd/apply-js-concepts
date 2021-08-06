

/*   
p = principal
t = time
r = rate
SI = simple interest
*/


function interest(p, t, r){
    var SI = (p * t * r) / 100;
    return SI;
}

var myInterest = interest(2200, 12, 10);
console.log(myInterest);