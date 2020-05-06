var majorityElement = function(nums) {
    let obj = {}
    
    nums.forEach(x => {
        if (obj[x]) {
            obj[x] = obj[x] + 1
        }
        else {
            obj[x] = 1
        }
    })
    let max = 0
    let count = 0
    Object.keys(obj).forEach(x => {
        if (obj[x] > count) {
            count = obj[x]
            max = x
        }
    })
    return max
}


/**
 Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
 */