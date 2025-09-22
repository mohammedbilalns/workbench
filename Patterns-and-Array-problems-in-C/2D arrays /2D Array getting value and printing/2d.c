#include <stdio.h>
#include <stdlib.h>
int main(){

	int arr[50][50];
	int rowSize , columnSize, i,j;

	printf("Enter the number of rows: ");
	scanf("%d",&rowSize);
	printf("Enter the number of columns: ");
	scanf("%d",&columnSize);


	for(i=0;i<rowSize;i++){
		printf("Enter the elements in %d row: ",i+1);
		for(j=0;j<columnSize;j++){
			scanf("%d",&arr[i][j]);
		}
	}
	system("clear");
	printf(" Array is: \n");
	for(i=0;i<rowSize;i++){
		for(j=0;j<columnSize;j++){
			printf("%d\t",arr[i][j]);
		}
		printf("\n");
	}
 


}
