const getAllDuplicates = (num) => {
    //sorting values
    let sortArray = num.sort(function(a, b) {
        return a - b;
    });
    //filtering equal values
    return sortArray.filter((item, index) => sortArray.indexOf(item) != index);
}

//input
const array = [1, 2, 2, 8, 54, 28, 13, 10, 8, 7, 54, 87];

//result
console.log(`Input ${array} -> output ${getAllDuplicates(array)}`)


