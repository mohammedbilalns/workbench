#include <stdio.h> 

int main(){

	int n =3 ;
	for(int i=1;i<=n;i++){
		printf("*\n");
		for(int j=1;j<=i;j++){
			for(int k=1;k<=i;k++){
				printf("*");
			}
			printf("\n");
		}
		for(int j=1;j<=3*i;j++){
			printf("*");
		}
		printf("\n");
	}

	return 0;
}


            