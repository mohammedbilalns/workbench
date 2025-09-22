#include <stdio.h>

int interPolateSearch(int array[], int size, int searchTerm){
	int lowIndex = 0; 
	int higIndex = size - 1;

	while(searchTerm >= array[lowIndex] && searchTerm <= array[higIndex] && lowIndex <=higIndex){
		int probe = lowIndex + (higIndex - lowIndex) * (searchTerm - array[lowIndex] )/ (array[higIndex] - array[lowIndex]);
		printf("Probe: %d", probe);
		if(array[probe] == searchTerm){
			return probe;
		}else if (array[probe] > searchTerm){
			higIndex = probe-1;
		}else{
			lowIndex = probe -1;
		}
	}
	return -1;
}
int main(){

	int searchTerm;
	int arr[] ={1,2,3,4,5,6,7,8,9,10};
	int arrSize = sizeof(arr)/sizeof(arr[0]);

	printf("Enter the number to search:  ");
	scanf("%d",&searchTerm);
	int index = interPolateSearch(arr, arrSize, searchTerm);

	if(index == -1){
		printf("%d is not in the array",searchTerm);

	}else {
		printf("%d is in the index: %d",searchTerm, index);
	}



}
