// let array = [4,5,6,3,2,6]

function sort (array) {
    for (let i = 1; i < array.length; i++) {
        let currentIndex = array[i];
        let j = i - 1
        while (j >=0 && array[j] > currentIndex) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currentIndex
    }
    return array
}

console.log( sort([4,5,6,3,2,6]) ) 