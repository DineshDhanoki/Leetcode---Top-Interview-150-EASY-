function mySqrt(x){
    if (x === 0){
        return 0
    }
    let left = 1
    let right = x
    let result = 0

    while (left <= right){
        const mid = Math.floor((left + right) / 2)
        if(mid * mid === x){
            return mid
        } else if (mid * mid < x){
            left = mid + 1
            result = mid
        } else {
            right = mid - 1
        }
        }
        return result
}