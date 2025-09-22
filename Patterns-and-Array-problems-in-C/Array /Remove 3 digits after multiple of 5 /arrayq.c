// Remove 3 digits after the multiples of 5 
#include "stdio.h"

void displayArray(int arr[], int size);

int main(){

	int arr[] = {3,5,4,2,6,7,10,4,6,2,67,12,25,2,5};
	int arrSize = sizeof(arr)/sizeof(arr[0]);

	printf("Original Array: ");
	displayArray(arr, arrSize);

	for(int i=0;i<arrSize;i++){
		if(arr[i]%5==0){
			int elementsToremove = arrSize-i-1 >=3 ? 3 : arrSize-i-1;
			for(int j=i+1;j<arrSize-elementsToremove;j++){
				arr[j]=arr[j+elementsToremove];

			}
			arrSize-=elementsToremove;
		}
	}

	printf("\n Array after removal: ");
	displayArray(arr, arrSize);
	
	return 0;
}
void displayArray(int arr[], int size){
	for(int i=1;i<size;i++){
		printf("%d\t",arr[i]);
	}
}