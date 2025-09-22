#include <stdio.h>

int main(){

	int num1, num2;
	printf("Enter the numbers \n ");
	scanf("%d%d",&num1,&num2);

	if(num1 > num2){
		printf("%d is larger than %d ",num1,num2);
	}else if (num2 > num1){
		printf("%d is greater than %d",num2,num1);
	}else{
		printf("%d is equalt to %d ", num1,num2);
	}


}
