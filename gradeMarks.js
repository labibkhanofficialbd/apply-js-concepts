
function marks(mark){
    var result = mark
    if (result>=80 && result<=100){
        return("Your Grade is A+");
    }
    else if (result>=70 && result<=79){
        return("Your Grade is A");
    }
    
    else if (result>=60 && result<=69){
        return("Your Grade is A-");
    }
    else if (result>=50 && result<=59){
        return("Your Grade is B");
    }
    else if (result>=40 && result<=49){
        return("Your Grade is C")
    }    
    else{
        return("fail");
    }
}

var myMark = marks(65);
console.log(myMark);


