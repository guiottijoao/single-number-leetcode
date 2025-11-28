const findSingleNumber = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
        else newArr = newArr.filter((num) => num !== arr[i])
    }
    return newArr
}

findSingleNumber([1, 1, 2])