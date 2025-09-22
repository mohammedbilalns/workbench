// delete an element from specific position 
#include <stdio.h> 
void displayArray(int arr[],int size);
int main(){
	int arr[] = {43,2,5,23,56,6,2,4,3,234,5665,3,32};
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	int elementToDelete,deleteIndex=-1;
	
	printf("Original array is:");
	displayArray(arr,arrSize);
	
	printf("\nEnter an element to delete, ");
	scanf("%d",&elementToDelete);
	
	for(int i=0;i<arrSize ;i++){
		if(arr[i]==elementToDelete){
			deleteIndex = i;
			break;
		}
	}
	if(deleteIndex>=0 && deleteIndex<arrSize){
		for(int i=deleteIndex;i<arrSize-1;i++){
			arr[i] =arr[i+1];
		}
		arrSize--;
		printf("Array after deletion:");
	displayArray(arr,arrSize);
	}else{
		printf("Invalid Element");
	}
	

	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}