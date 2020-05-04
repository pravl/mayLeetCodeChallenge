var findComplement = function(num) {
    let b = (num >>> 0).toString(2)
    console.log(b)
    let a = b.split("").map(x => x === "0" ? 1 : 0)
   
     return parseInt(a.join(""),2)

}


/* 

Given a positive integer, output its complement number. The complement 
strategy is to flip the bits of its binary representation.
*/