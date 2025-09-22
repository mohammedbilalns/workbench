// Insert find minimum and maximum  
#include <stdio.h> 
void displayArray(int arr[],int size);
int main(){
	int arr[] = {43,2,5,23,56,6,2,4,3,234,2,6,6,5665,3,3,3,3,32};
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	
	int min = arr[0];
	int max = arr[0];
	
	for(int i=0;i<arrSize;i++){
		if(arr[i]<min){
			min = arr[i];
		}
		if(arr[i]>max){
			max = arr[i];
		}
	}
	printf("minimum: %d \nmaximum:: %d",min,max);
	

	return 0;
}