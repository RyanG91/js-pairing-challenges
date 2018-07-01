arr = [1,2,3]
array2 = []

const reverseArray = (array) => {
for (let index = -1; index <= array.length; index++) {
    array2.push(array.pop())
}
console.log(array2)
}

reverseArray(arr)