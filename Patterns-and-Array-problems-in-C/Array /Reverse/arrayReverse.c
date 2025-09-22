// Reverse the array 
#include <stdio.h> 
void displayArray(int arr[],int size);

int main(){
	int arr[] = {33,5,10,21,0,1,3,0,-13,430,56,-0,-22,0};
	int arrSize = sizeof(arr)/sizeof(arr[0]),temp;
	
	printf("Array :");
	displayArray(arr,arrSize);
	
	for(int i=0;i<arrSize/2;i++){
		temp = arr[i];
		arr[i] =arr[arrSize-i-1] ;
		arr[arrSize-i-1]=temp;
		
	}
	
	printf("\nArray after removal:");
	displayArray(arr,arrSize);
	
	
	
	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}