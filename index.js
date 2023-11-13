



// ================ ASSIGNMENT 1 =================\\

//  const numbers =  [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

//  const backReverse = numbers.reverse((num , num1) => num1.length - num1.length)
//   console.log(backReverse);


// ================ ASSIGNMENT 2 =================\\
// const lkValue = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

// const getMinValue = Math.min(...lkValue)
// const getMaxValue = Math.max(...lkValue)

// console.log(getMinValue);
// console.log(getMaxValue);

// ================ ASSIGNMENT 3 =================\\

// const numbers = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

// let max = numbers[0] , min = numbers[0]
// for(let i = 0;   i < numbers.length; i++) {
// i
//     if (numbers[i] > max) { max = numbers[i]; }

//     if(numbers[i] < min) { min = numbers[i]; }
// }

// console.log('max = ' + max);
// console.log('min = ' + min);

// ================ ASSIGNMENT 4 =================\\
// const numbers = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

// const negative = numbers.filter(negativeNumbers)

// function negativeNumbers(num) {
    
//     return num < 0
// }

// console.log(negative);

// ================ ASSIGNMENT 5 =================\\

//  const filterOdd = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

//  const oddNumbers = filterOdd.filter((num1) => num1 % 2 === 1)

//  console.log(oddNumbers);

// ================ ASSIGNMENT 6 =================\\
// const number = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

// let sumPos = 0 

// for(let r = 0; r < number.length; ++r) {
//     if (number[r] > 0) {
//         sumPos += number[r]
//     }
// }
// console.log(sumPos);

// ================ ASSIGNMENT 7 =================\\

// const arr = [1, [2, 3], [4, [5, 6]]]

// let flatArr = arr.flat(Infinity)

// console.log(flatArr);

// ================ ASSIGNMENT 8 =================\\

// const arr1 = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]
// const arr2 = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]

// arr1.sort((a, b) => a - b)
// console.log(arr1)

// arr2.sort((b, a) => a - b)
// console.log(arr2);