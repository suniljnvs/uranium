function missingNumber(array) {
    array = [1, 2, 3, 4, 5, 7, 8, 9]
    let arraylen = array.length

    const naturalNum = (arraylen + 1) * (arraylen + 2) / 2

    let sumArray = 0

    for (let i = 0; i < arraylen; i++) {
        sumArray += array[i]

    }
    return (naturalNum - sumArray)
}
console.log(missingNumber([1, 2, 3, 4, 5, 7, 8, 9]))