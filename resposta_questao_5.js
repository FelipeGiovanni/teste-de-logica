//qty
const friends = 5;

const combinations = (qty) => {
  //calc
    if(qty > 2) qty*= qty - 1
  
    return qty
}
//result
console.log(combinations(friends))