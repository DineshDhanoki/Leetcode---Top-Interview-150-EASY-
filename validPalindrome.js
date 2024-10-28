function isPlaindrome(s){
    const cleanString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    return (cleanString === cleanString.split('').reverse().join(''))
}

const s = "A man, a plan, a canal: Panama"
const result = isPlaindrome(s)
console.log(result)