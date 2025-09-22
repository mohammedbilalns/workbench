#include <stdio.h>

// find the second largest element in the array 
int main(){

	int arr[] = {4,2,5,3,4,6,7,1,4,6,10};
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	int largest = arr[0] , secondlargest = arr[0];

	for(int i=0;i<arrSize;i++){
		if(arr[i]> largest){
			secondlargest = largest;
			largest=arr[i];
		}else if(arr[i]>secondlargest && arr[i] != largest){
			secondlargest = arr[i];
		}
	}

		printf("Largest is %d and the second largest is %d ",largest, secondlargest);
	



	return 0;
}
