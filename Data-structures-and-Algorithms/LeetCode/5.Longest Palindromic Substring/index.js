// Given a string s , return the longest palindromic substring in s 





var longestPalindrome = function(s) {
	
	let maxLength = 0 
	let start = 0 


	let expandAroudCenter = function(left , right){

		while(left >= 0 && right < s.length && s[right] == s[left]){
			left-- 
			right++
		}

		return [left+1 , right-left-1 ]
	}

	for(let i=0 ; i <s.length ; i++){
		
		let [oddStart, oddLength ] = expandAroudCenter(i, i)
		let [evenStart , evenLength ] = expandAroudCenter(i , i+1)

		if(oddLength > maxLength && oddLength > evenLength){
			maxLength = oddLength 
			start = oddStart
		}else if(evenLength > maxLength){
			maxLength = evenLength 
			start = evenStart
		}
	}

	return s.slice(start, start+ maxLength)
}




console.log(longestPalindrome("babad"))
