// Write a function taht reversess a string. 
// do this by modifying the input array in-place with 0(1)

let s = ["h","e","l","l","o"]

const reverseStr = (s) => {
    let left = 0 
    let right = s.length -1 

    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]]
        left ++
        right --
    }
    return s
}

// const reverseStr = (s) => {
//     s.reverse(s)
//     return s
// }

console.log(reverseStr(s))
// reverseStr(s)

