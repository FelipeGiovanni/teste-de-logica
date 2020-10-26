const array = ["1,2,3,4,4,5"];

for (let i in array) {
    let value = array[i].split(',');
    let order = true;
    for(let j = 0 ; j < value.length - 1 ; j++){
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
