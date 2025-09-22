#include <stdio.h>
#include <stdlib.h>
int main(){

	int numberOfLines, i , j ;
	printf("enter the number of lines \n");
	scanf("%d",&numberOfLines);
	system("clear");

	for(i=1; i<=numberOfLines;i++){
	for(j=1;j<=i;j++){
			printf("%d ",j);
		}


		printf("\n");
	}


}
