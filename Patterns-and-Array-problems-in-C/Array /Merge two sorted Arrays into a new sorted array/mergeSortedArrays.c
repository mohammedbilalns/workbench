#include <stdio.h>
// Merge two sorted arrays into one (sorted one )

int main(){

	int arr1[] = {1,4,5,6,8}, arr2[] ={2,3,7,9}, mergedArray[50];
	int arr1Size = sizeof(arr1)/sizeof(arr1[0]), arr2Size = sizeof(arr2)/sizeof(arr2[0]);
	int i=0,j=0,k=0 ; 

	while(i<arr1Size && j< arr2Size){
		if(arr1[i] < arr2[j]){
			mergedArray[k++]= arr1[i++];
		}else{
			mergedArray[k++] = arr2[j++];
		}
	}

	while(i< arr1Size){
		mergedArray[k++] = arr1[i++];
	}
	while(j< arr2Size){
		mergedArray[k++] = arr2[j++];
	}

	for(i=0;i<k ;i++){
		printf("%d \t",mergedArray[i]);
	}


}
