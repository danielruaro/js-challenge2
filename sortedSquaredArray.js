

function sortedSquareArray(array) {

    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        array[i] = array[i] * array[i];
    }

    array.sort((a,b) => a-b)

    return array;

}

console.log(sortedSquareArray([1, 2, 3, 5, 6, 8, 9]))

console.log(sortedSquareArray([-2, -1]))

console.log(sortedSquareArray([-10, -5, 0, 5, 10]))