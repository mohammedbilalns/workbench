// Remove 2 digits after the multiples of 5 
#include <stdio.h> 
void displayArray(int arr[],int size);

int main(){
	int arr[] = {33,5,10,21,0,1,3,0,-13,430,56,-0,-22,0};
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	
	printf("Array :");
	displayArray(arr,arrSize);
	
	for(int i=0;i<arrSize;i++){
		if(arr[i]%5==0){
			int elementsToRemove = arrSize-i-1 >=2 ? 2 : arrSize-i-1;
			for(int j=i+1;j<arrSize -elementsToRemove;j++){
				arr[j]=arr[j+elementsToRemove];
			}
			arrSize-=elementsToRemove;
		}
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
