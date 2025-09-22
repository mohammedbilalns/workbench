// Find and replace an element in the array 
#include <stdio.h> 
void displayArray(int arr[],int size);
int main(){
	int arr[] = {43,2,5,23,56,6,2,4,3,234,5665,3,32};
	int arrSize = sizeof(arr)/sizeof(arr[0]),oddCount,evenCount;
	int elementToReplace,newElement,replaceIndex,isFound =0;
	
	printf("Original array is:");
	displayArray(arr,arrSize);
	
	printf("\nEnter an element to replace, ");
	scanf("%d",&elementToReplace);
	printf("Enter the new element");
	scanf("%d",&newElement);
	
	for(int i=0;i<arrSize;i++){
		if(arr[i]==elementToReplace){
			arr[i] = newElement;
			isFound =1;
		}
	}
	if(isFound==0){
		printf("The element is not in array");
	}else{
		printf("Array after replacement: ");
		displayArray(arr,arrSize);
	}

	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}