// delete an element from specific position 
#include <stdio.h> 
void displayArray(int arr[],int size);
int main(){
	int arr[] = {43,2,5,23,56,6,2,4,3,234,5665,3,32};
	int arrSize = sizeof(arr)/sizeof(arr[0]),oddCount,evenCount;
	int positionToDelete;
	
	printf("Original array is:");
	displayArray(arr,arrSize);
	
	printf("Enter an position to delete, ");
	scanf("%d",&positionToDelete);
	int deleteIndex=positionToDelete-1;

	
	if(deleteIndex>=0 && deleteIndex<arrSize){
		for(int i=deleteIndex;i<arrSize-1;i++){
			arr[i] = arr[i+1];
		}
		arrSize--;
	}else{
		printf("Invalid position");
	}
	printf("Array after deletion:");
	displayArray(arr,arrSize);

	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}