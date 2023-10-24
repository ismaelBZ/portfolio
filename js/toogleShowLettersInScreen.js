function getIndex(phrase) {
    let indexes = []
    for (index in phrase) {
        indexes.push(parseInt(index))
    }
    // console.log(indexes)
    return indexes; 
}

function getLetter(phrase) {
    let letters = []
    for (letter of phrase) {
        letters.push(letter);
    }
    // console.log(letters);
    return letters
}

function getMaxLength(...arr) {
    let arrays = [...arr];
    let biggerArray = 0;
    for (let array of arrays) {
        if (array.length > biggerArray) {
            biggerArray = array.length;
        }
    }
    return biggerArray;
}

function fillArrayLength(arr, length) {
    while ( arr.length < length) {
        let splicePosition = Math.random() * arr.length;
        arr.splice(splicePosition, 0, '')
    }
    return arr;
}

indexes1 = getLetter("Programador");
indexes2 = getLetter("Desenvolvedor");


console.log(indexes1.sort())
console.log(fillArrayLength(indexes1, getMaxLength(indexes1, indexes2)))
console.log(indexes2.reverse())
console.log(getMaxLength(indexes1, indexes2))