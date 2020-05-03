var canConstruct = function(ransomNote, magazine) {
    let obj = {}
    for(let i = 0 ; i< magazine.length ; i++) {
        if (obj[magazine.charAt(i)]) {
            obj[magazine.charAt(i)] = obj[magazine.charAt(i)] + 1
        }
        else {
            obj[magazine.charAt(i)] = 1
        }
    }
      for(let i = 0 ; i< ransomNote.length ; i++) {
          if (obj[ransomNote.charAt(i)]) {
              if(obj[ransomNote.charAt(i)] > 0) {
                  
                  obj[ransomNote.charAt(i)] = obj[ransomNote.charAt(i)] -1
              }
              else {
                  return false
              }
          }
          else { return false }     
      }
}



/* 
Ransom Note



Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.
*/