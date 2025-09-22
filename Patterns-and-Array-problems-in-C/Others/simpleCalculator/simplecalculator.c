#include <stdio.h>

float sum(float a,float b){	
	return a+b;
}
float difference(float a,float b){	
	return a-b;
}
float product(float a, float b){
	return a*b;
}
float division(float a , float b ){
	if(b == 0){
		printf("can't divide by zero");
		return 0;
	}else {
		return  a/b;
	}
}

int main(){

	float a , b, result ;
	int choice;
	printf("Enter the two numbers: ");
	scanf("%f%f",&a,&b);
	printf("Enter 1 to sum \n 2 to difference \n 3 for prodct \n 4 for division \n ");
	scanf("%d", &choice);
	switch (choice) {
		case 1:
			result = sum(a,b);
		break;
		case 2:
			result = difference(a, b);
		break;
		case 3:
			result = product(a, b);
		break;
		case 4:
			result = division(a, b);
		break;
		default:
		break;	
	}
	printf("Result is %f",result);



 




}
