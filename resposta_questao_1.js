//input
const array = ["1,2,3,4,4,5", "5,4,2", "1,3,5,7,8,8,10"];

for (let i in array) {
    //split array
    let value = array[i].split(',').map(Number)
    //initial value
    let order = true;
    //checking if next value is 
    for(let j = 0 ; j < value.length - 1 ; j++){
        // checking if the next value is greater
        if(value[j] > value[j+1]) {
            order = false;
            break;
        }
    }

    if(order === true) {
        console.log(value + " -> Está ordenado");
    } else {
        console.log(value + " -> Não está ordenado");
    }
}
