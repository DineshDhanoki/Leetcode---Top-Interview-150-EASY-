function reverseBits(n){
let result = 0
for(i = 0; i < 32; i++){
    result <<= 1 | (n & 1)
    n >>= 1
}
return result >>> 0
}