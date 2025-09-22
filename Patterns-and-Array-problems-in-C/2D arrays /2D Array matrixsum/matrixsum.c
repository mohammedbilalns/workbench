#include <stdio.h>

int main(){

	int sizeofArray, i , j;
	printf("Enter the size of the first array : \n"); 
	scanf("%d",&sizeofArray);
	int array1[sizeofArray][sizeofArray], array2[sizeofArray][sizeofArray], resultArray[sizeofArray][sizeofArray];
	// get the size and declare the array 
	
	printf("Enter the content of first matrix \n  ");
	for(i = 0; i<sizeofArray; i++){
		for(j=0; j<sizeofArray; j++){
			printf("Enter the number in %d row %d column :  ", i+1,j+1);
			scanf("%d",&array1[i][j]);
			printf("\n");
		}
	}
	// get the content of the first matrix 

	printf("Enter the content of second matrix \n  ");
	for(i = 0; i<sizeofArray; i++){
		for(j=0; j<sizeofArray; j++){
			printf("Enter the number in %d row %d column :  ", i+1,j+1);
			scanf("%d",&array2[i][j]);
			printf("\n");
		}
	}
	// get the content of the second matrix 
	
	for(i=0; i<sizeofArray; i++){
		for(j=0; j<sizeofArray; j++){
			resultArray[i][j] = array1[i][j]+array2[i][j];
		}
	}
	// store sum in the result matrix
	printf("The sum of the matrixes is: \n");

	for(i=0; i<sizeofArray; i++){
		for(j=0; j<sizeofArray; j++){
			printf("%d ",resultArray[i][j]);
		}
		printf("\n");
	}
}
