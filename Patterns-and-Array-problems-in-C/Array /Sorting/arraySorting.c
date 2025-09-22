#include <stdio.h>

int main(){

	int array[5] = {54,34,12,56, 98}, i , j;
	for(i=0;i<=4;i++){
		for(j=i+1; j<5; j++){
			if(array[j]<array[i]){
				array[i] = array[i]+array[j];
				array[j] = array[i]- array[j];
				array[i] = array[i] - array[j];
			}
		}
	}

	printf("sorted array is ");
	for(i=0;i<5;i++){
		printf("%d \t",array[i]);
	}
}
