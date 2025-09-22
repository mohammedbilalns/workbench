
// using o(N^2)T 
//var countSubstrings = function(s,c){
//
//	let count = 0 
//	for(let i= 0 ;i<s.length;i++){
//		for(let j=i;j<s.length;j++){
//			if(s[i]==c && s[j]==c) {
//				count++
//			}
//		}
//	}
//
//	return count
//}


// 
var countSubstrings2 = function(s,c){

	let char = []
	for(let i = 0 ; i <s.length;i++){
		if(s[i]==c) char.push(c) 
	}
	let length = char.length

	return (length*(length+1)/2)
}


console.log(countSubstrings2("zzz", "z"))
