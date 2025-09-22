#include <stdio.h> 

int main(){
	int arr1[50],arr2[50], mergedArray[100];
	int arr1Size, arr2Size,mergedArrayIndex =0;
	
	printf("Enter the size of the first array: ");
	scanf("%d",&arr1Size);
	printf("Enter the values of first array: ");
	for(int i=0;i<arr1Size;i++){
		scanf("%d",&arr1[i]);
	}
	
	printf("Enter the size of the second array: ");
	scanf("%d",&arr2Size);
	printf("Enter the values of second array: ");
	for(int i=0;i<arr2Size;i++){
		scanf("%d",&arr2[i]);
	}
	
	for(int i=0;i<arr1Size;i++){
		mergedArray[mergedArrayIndex++] =arr1[i];
	}
	for(int i=0;i<arr2Size;i++){
		mergedArray[mergedArrayIndex++] = arr2[i];
	}
	
	printf("\nMerged array :");
	for(int i=0;i<mergedArrayIndex;i++){
		printf("%d\t",mergedArray[i]);
	}
	

	return 0;
}