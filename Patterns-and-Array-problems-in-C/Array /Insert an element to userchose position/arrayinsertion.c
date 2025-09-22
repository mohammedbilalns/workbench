// Insert element in the user chosen position  
#include <stdio.h> 
void displayArray(int arr[],int size);
int main(){
	int arr[] = {43,2,5,23,56,6,2,4,3,234,2,6,6,5665,3,3,3,3,32};
	int arrSize = sizeof(arr)/sizeof(arr[0]), positionToInsert,elementToInsert;
	
	printf("Array is: ");
	displayArray(arr,arrSize);
	printf("\nEnter the element to insert");
	scanf("%d",&elementToInsert);
	
	printf("Enter the position to insert");
	scanf("%d",&positionToInsert);
	
	int indexToInsert = positionToInsert-1;
	for(int i=arrSize-1;i>=indexToInsert;i--){
		arr[i+1]=arr[i];
	}
	arr[indexToInsert]= elementToInsert;
	printf("Array after inserting elemnt: ");
	displayArray(arr,arrSize+1);
	

	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}