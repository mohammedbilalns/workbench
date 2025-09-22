#include <stdio.h>

int main(){
	
	int number ; 
	printf("Enter  a number \n");
	scanf("%d",&number);


	if(number <0){
		printf("%d is negative",number);
	}else if(number >0 ){
		printf("%d is positive",number);
	}else{
		printf("%d is zero ",number);
	}
}
