// remove three numbers after first non prime  
#include <stdio.h> 
void displayArray(int arr[],int size);
int isPrime(int n);
int main(){
	int arr[] = {33,5,-1,21,0,1,3,0,-13,430,56,-0,-22,0};
	int arrSize = sizeof(arr)/sizeof(arr[0]), primeCount=0;
	float primeSum=0;
	printf("Array: ");
	displayArray(arr,arrSize);
	
	for(int i=0;i<arrSize;i++){
		if(isPrime(arr[i])==0){
			for(int j=i+1;j<arrSize-3;j++){
			arr[j] = arr[j+3];
			}
			arrSize-=3;
			break;
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

int isPrime(int n){
	if(n<=1){
	return 0;
	}else{
		for(int i=2;i*i<=n;i++){
			if(n%i==0){
			return 0;
			}
		}	
	}
	return 1;
	
}