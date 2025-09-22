#include <stdlib.h>
#include <stdio.h>

int main(){

	int y = 10 ; 
	float x = 9; 
	/*printf("%d",x+y);*/
	/*y = ++x;*/
	x>y? printf("x is larger") : printf("x is smaller \n"); // terinary 
	/*system("clear");*/
	int c = x<y && printf("This is some text") || "This is another text"; //logical
	int z = x>y ? x : y;
	int result = --y && ++x;
	printf("%d",result);
}
