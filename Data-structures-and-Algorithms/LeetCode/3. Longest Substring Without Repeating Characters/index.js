
var lengthOfLongestSubstring = function(s) {
   let substr = new Set()
   let longestLength = 0 
   let left  = 0 

   for(let right = 0 ; right < s.length ; right++){

        while(substr.has(s[right])){
            substr.delete(s[left])
            left++ 
        }
        substr.add(s[right])

        longestLength = substr.size  > longestLength ? substr.size : longestLength  

   }

    return longestLength 

};
