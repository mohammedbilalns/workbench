#include <stdio.h>
#include <stdlib.h>

void display2dArray(int arr[][50], int rowSize, int columnSize){
	int i,j;
	for(i=0;i<rowSize;i++){
		for(j=0;j<columnSize;j++){
			printf("%d\t",arr[i][j]);
		}
		printf("\n");
	}

}

int main(){

	int matrix1[50][50],matrix2[50][50], productMatrix[50][50],rowsizeMatrix1=-1, rowsizeMatrix2=-1,columnsizeMatrix1=-1, columnsizeMatrix2=-1, i, j,k,l;

	while (rowsizeMatrix1<=0 || rowsizeMatrix1 >50) {
		printf("Enter the number of rows of first matrix: ");
		scanf("%d",&rowsizeMatrix1);
	}
	while (columnsizeMatrix1<=0|| columnsizeMatrix1 >50) {
		printf("Enter the number of columns of first matrix: ");
		scanf("%d",&columnsizeMatrix1);
	}
	for(i=0;i<rowsizeMatrix1;i++){
		printf("Enter the elemnts in the %d row of matrix 1: \n",i);
		for(j=0;j<columnsizeMatrix1;j++){
			scanf("%d",&matrix1[i][j]);
		}
	}
	while (rowsizeMatrix2<=0 || rowsizeMatrix2 >50) {
		printf("Enter the number of rows of second matrix: ");
		scanf("%d",&rowsizeMatrix2);
	}
	if(columnsizeMatrix1 != rowsizeMatrix2){
		printf("Error :  column size of first matrix and row size of second matrix should be the same ");
		return 1;
	}
	while (columnsizeMatrix2<=0|| columnsizeMatrix2 >50) {
		printf("Enter the number of columns of second matrix: ");
		scanf("%d",&columnsizeMatrix2);
	}
	for(i=0;i<rowsizeMatrix2;i++){
		printf("Enter the elemnts in the %d row of matrix 2: \n",i);
		for(j=0;j<columnsizeMatrix2;j++){
			scanf("%d",&matrix2[i][j]);
		}
	}
	system("clear");
	printf("First matrix is: \n");
	display2dArray(matrix1, rowsizeMatrix1,columnsizeMatrix1);
	printf("Second matrix is: \n");
	display2dArray( matrix2, rowsizeMatrix2, columnsizeMatrix2);

	for(i=0;i<rowsizeMatrix1;i++){
		for(j=0;j<columnsizeMatrix2;j++){
			int value = 0 ;
			for(k=0;k<columnsizeMatrix1;k++){
				
					value+=matrix1[i][k] * matrix2[k][j];
				
			}

			productMatrix[i][j] = value;
		}
	}

	printf("Product Array is : \n");
	display2dArray(productMatrix, rowsizeMatrix1, columnsizeMatrix2);
	
	return 0;
}
