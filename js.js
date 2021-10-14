const array = [2, 55, 11, 4, 888, 10, 50]

// for (let j = 0; j <array.length-1; j++) {
//     for (let i = 0; i < array.length - 1-j; i++) {
//         if (array[i] > array[i + 1]) {
//             let temp = array[i + 1]
//             array[i + 1] = array[i]
//             array[i] = temp
//
//             // [array[i + 1],array[i]]=[array[i],array[i + 1]]
//         }
//
//     }
//
// }
console.log(array)

const immutableSort = (array) =>{
    const copy = [...array]
    const result = []
    for (let i = 0; i < array.length; i++) {
        const max  = Math.max(...copy)
        const index = copy.indexOf(max)
        copy.splice(index,1)
        result.unshift(max);
    }
    return result
}
console.log(immutableSort(array))

//sort
console.log(array.sort((a,b)=>a-b))

const words = ['bla','yo','d','amo','okokok',10,'2000']
let a =words.map(w=>w.toString().toLowerCase()).sort().reverse()
console.log(a)