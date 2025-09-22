// odd and even seperate arrays 
#include <stdio.h> 
void displayArray(int arr[],int size);
int isPrime(int n);
int main(){
	int arr[] = {33,5,-1,21,0,1,3,0,-13,430,56,-0,-22,0},oddArr[50], evenArr[50];
	int arrSize = sizeof(arr)/sizeof(arr[0]), primeCount=0, oddArrIndex=0,evenArrIndex=0;
	
	printf("Array: ");
	displayArray(arr,arrSize);
	
	for(int i=0;i<arrSize;i++){
		if(arr[i]%2==0){
		evenArr[evenArrIndex++] = arr[i];
		}else{
		oddArr[oddArrIndex++] = arr[i];
	}	
	}
	printf("\nOdd array:");
	displayArray(oddArr,oddArrIndex);
	printf("Even array:");
	displayArray(evenArr,evenArrIndex);
	return 0;
}

void displayArray(int arr[],int size){
	for(int i=0;i<size;i++){
		printf("%d\t",arr[i]);
	}
}

