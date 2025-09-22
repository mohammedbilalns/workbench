
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strSTr = function(haystack, needle){

        if (needle.length === 0) return 0;
    
        let haystackLength = haystack.length;
        let needleLength = needle.length;
    
        for (let i = 0; i <= haystackLength; i++) {
            if (haystack.slice(i, i + needleLength) === needle) {
                return i;  
            }
        }
    
        return -1;  
       
}

console.log( strSTr("leetcode", "code"))
