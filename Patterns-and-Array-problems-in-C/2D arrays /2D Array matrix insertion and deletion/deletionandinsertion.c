#include <stdio.h>

int main(){

	int arr[3][4] = {{12,3,4,43},{34,45,56,23},{44,34,23,43}};
	int rowSize = sizeof(arr)/sizeof(arr[0]);
	int columnSize = sizeof(arr[0])/sizeof(arr[0][0]);

	printf("%d",columnSize);

	return 0;
} 
