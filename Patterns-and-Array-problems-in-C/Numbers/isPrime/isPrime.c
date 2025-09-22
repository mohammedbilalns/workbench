#include <stdio.h>

int main(){
	int numberToCheck;
	int isPrime = 1;
	printf("Enter the number to check \n");
	scanf("%d",&numberToCheck);

	for(int i=2; i<=numberToCheck/2; i++){
		if(numberToCheck % i == 0 ){
			isPrime = 0;
		}
	}
	if (isPrime== 1) {
		printf("%d is prime ", numberToCheck);	
	}else{
		printf("%d is not a prime", numberToCheck);
	}

}
