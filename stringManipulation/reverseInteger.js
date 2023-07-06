let s = 1123

const reverseInteger = (s) => {
    s = Number(s.toString().split('').reverse().join(''))
    return s
}

console.log(reverseInteger(s))