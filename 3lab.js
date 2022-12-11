const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
)

const arr = generateArray(100, 100)
console.log(JSON.stringify(arr))

let count = 0

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let t = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = t
                count += 1
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            count+=1
            if (arr[j] < arr[min]) min = j
        }
    let t = arr[min]
    arr[min] = arr[i]
    arr[i] = t
}

return arr
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j]
            j--
            count+=1
        }
        arr[j + 1] = v
    }
    return arr
}

function shellSort(arr) {
    let i = Math.floor(arr.length / 2)
    while (i > 0) {
        for (let j = 0; j < arr.length; j++) {
            let k = j
            t = arr[j]
            while (k >= i && arr[k - i] > t) {
                arr[k] = arr[k - i]
                k -= i
                count+=1
            }
            arr[k] = t
        }
        i = (i === 2) ? 1 : Math.floor(i * 5 / 11);
    }
    return arr

}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex)
            continue
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
        count+=1
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        count+=1
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

//console.log(JSON.stringify(bubbleSort(arr)))
//console.log(JSON.stringify(selectionSort(arr)))
//console.log(JSON.stringify(insertionSort(arr)))
//console.log(JSON.stringify(shellSort(arr)))
//console.log(JSON.stringify(quickSort(arr)))
//console.log(JSON.stringify(mergeSort(arr)))
//console.log(count)



