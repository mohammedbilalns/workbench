#include <stdio.h>
#include <stdlib.h>

void displayArray(int arr[][50] , int size){
	int i, j ;
	for(i=0;i<size;i++){
		for(j=0;j<size;j++){
			printf("%d\t",arr[i][j]);

		}
		printf("\n");
	}

}
int main(){

	int arr[50][50],arrTranspose[50][50], arrSize=-1, i, j;

	while (arrSize<=0 || arrSize >50) {
		printf("Enter the size of the matrix(size should be between 1 and 50): ");
		scanf("%d",&arrSize);
	} 

	for(i=0;i<arrSize;i++){
		printf("Enter the elements in %d row: ",i);
		for(j=0;j<arrSize;j++){
			scanf("%d",&arr[i][j]);
		}
	}
	system("clear");
	printf("matrix  : \n");
	displayArray(arr,arrSize);

	for(i=0;i<arrSize;i++){
		for(j=i+1;j<arrSize;j++){
			arr[i][j] = arr[i][j]+arr[j][i];
			arr[j][i] = arr[i][j]-arr[j][i];
			arr[i][j] = arr[i][j]-arr[j][i];
		}
	}
	printf("Transpose : \n ");
	displayArray(arr, arrSize);
}
