
function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    return false;
}

const thisYear = isLeapYear(2024);

console.log(thisYear); 

function isLeap(year) {
    return new Date(year, 1, 29).getDate() === 29;
  }
  
  const year = 2100;
  const checkLeap = isLeap(2100);
  console.log(checkLeap);