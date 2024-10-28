function wordPattern(pattern, s){
    const patternMap = {}
    const wordMap = {}
    const words = s.split(' ')

    if(pattern.length !== words.length){
        return false
    }

    for(let i=0; i<pattern.length; i++){
        const char = pattern[i]
        const word = words[i]

        if((patternMap[char] !== undefined && patternMap[char] !== word) ||
        (wordMap[word] !== undefined && wordMap[word] !== char)){
            return false
        }
        patternMap[char] = word
        wordMap[word] = char
    }
    return true
}

const pattern = "abba";
const s = "dog constructor constructor dog";
const result = wordPattern(pattern, s);
console.log(result);