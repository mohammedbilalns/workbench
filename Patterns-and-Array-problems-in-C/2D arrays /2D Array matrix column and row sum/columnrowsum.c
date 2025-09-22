#include <stdio.h>
#include <stdlib.h>

void displayArray(int arr[][50], int rowSize, int columnSize){
	int i,j;
	for(i=0;i<rowSize;i++){
		for(j=0;j<columnSize;j++){
			printf("%d\t",arr[i][j]);
		}
		printf("\n");
	}

}
int main(){

	int arr[50][50], rowSize, columnSize,columnSum[50],rowSum[50],i,j;

	printf("enter row size : ");
	scanf("%d",&rowSize);
	printf("Enter columsn size: ");
	scanf("%d",&columnSize);

	for(i=0;i<rowSize;i++){
		printf("enter the elements in the %d row",i);
		for(j=0;j<columnSize;j++){
			scanf("%d",&arr[i][j]);
		}
	}

	system("clear");
	printf("Matrix is : \n");
	displayArray(arr, rowSize,columnSize);

	for(i=0;i<rowSize;i++){
		rowSum[i] =0;
		for(j=0;j<columnSize;j++){
			rowSum[i] += arr[i][j];
		}
	}
	for(i=0;i<columnSize;i++){
		columnSum[i] =0;
		for(j=0;j<rowSize;j++){
			columnSum[i] += arr[j][i];

		}
	}

	for(i=0;i<rowSize;i++){
		printf("sum of row %d is %d\n",i+1,rowSum[i]);
	}
	for(i=0;i<columnSize;i++){
		printf("Sum of column %d is %d\n",i+1,columnSum[i]);
	}
}
