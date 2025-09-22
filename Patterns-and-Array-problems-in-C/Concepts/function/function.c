#include <stdio.h>

int sum (int num1,int num2){
	return num1+num2;
}

int main(){
	
	int a , b, result ;

	scanf("%d%d",&a,&b);
	result = sum(a,b);
	printf("%d",result);


}
