#include <stdio.h>
#include <strings.h>

int binarySearch(int array[], int size, int SearchTerm){
	int lowIndex = 0; 
	int highIndex = size-1;

	while (lowIndex<=highIndex) {
		int middleIndex = lowIndex + (highIndex-lowIndex)/2;
		int middleValue = array[middleIndex];
		printf("Middle value is : %d \n ",middleIndex );

		if(middleIndex > SearchTerm ){
			highIndex = middleIndex -1;
		}else if (middleIndex < SearchTerm){
			lowIndex = middleIndex +1;
		}else {
			return middleIndex;
		}
	}


	return -1;
}
int main(){
	int searchTerm;
	int array[500];
	for(int i=0; i<500;i++){
		array[i] = i;
	}
	int arrSize = 500;
	/*for(int i=0; i<500; i++){*/
	/*	printf("value is : %d", array[i]);*/
	/*}*/
	printf("Enter the number to search ");
	scanf("%d",&searchTerm);

	int index = binarySearch(array, arrSize,searchTerm);
	if(index == - 1 ){
		printf("Searched item is not in the array");

	}else {
		printf("Searched item is in the index: %d ",index);
	}



}
