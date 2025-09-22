#include <stdio.h>

int main(){

	int arr[] = {3,4,5,2,3,6,7,8,5,4};
	int arrSize = sizeof(arr)/sizeof(arr[0]);
	int evenCount=0 , oddCount =0, i;

	for(i=0;i< arrSize;i++){
		arr[i] % 2 ==0 ? evenCount++ : oddCount++;
	}

	printf("Array contains %d even and %d odd numbers",evenCount,oddCount);


	return 0;
}
