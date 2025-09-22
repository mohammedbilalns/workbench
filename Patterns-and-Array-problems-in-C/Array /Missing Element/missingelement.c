#include <stdio.h>

int main(){
	int arr[] = {1,2,3,4,5,6,8,9,10};	
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	int actualSum = (arrSize+1) * (arrSize+2)/2;
	int currentSum = 0 ;

	for(int i=0;i<arrSize;i++){
		currentSum+=arr[i];	
		}

	printf("The element not  in the array is : %d", actualSum - currentSum);
	}

	

