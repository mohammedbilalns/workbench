// given an array reverse the elements of the array 
function reverse<T>(arr:T[]){
	let start = 0 , end = arr.length -1 
	while(start< end){
		[arr[start], arr[end]] = [arr[end], arr[start]]
		start++ 
		end-- 
	}

}
const arr = [0,2,3,7 ,6,1,4]


// reverse only the elments in th odd indexes 
function reverseOddIndexes<T>(arr:T[]){
	let start=0 , end = (arr.length-1 %2 == 0 )? arr.length-2: arr.length-1 
	while(start< end){
		[arr[start], arr[end]] = [arr[end], arr[start]]
		start+=2  
		end-=2 
	}
}

// given an array of numbers reverse the elements at where number is odd 
function reverseOddNumbers(arr:number[]){
	let left = 0 , right = arr.length-1

	while(left < right ){
		if(arr[left]% 2 ==0) left++
			else if(arr[right] %2 ==0 ) right--
				else{
					[arr[left], arr[right]] =[arr[right], arr[left]]
					left++
					right-- 
				}
	}
}

reverseOddNumbers(arr)
console.log(arr);


