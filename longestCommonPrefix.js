function longestCommonPrefix(strs) {
    if (strs.length === 0){
        return ''
    }

    let prefix = strs[0]

    for(i=0; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0,-1)

            if(prefix === 0){
                return ''
            }
        }
    }
    return prefix
}

const strs = ['dinesh', 'diplo', 'diplodocus']
const result = longestCommonPrefix(strs)
console.log(result)
