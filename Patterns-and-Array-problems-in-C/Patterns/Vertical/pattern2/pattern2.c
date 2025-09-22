#include <stdio.h> 

int main(){

	int n =4,k=2 ;
	for(int i=1;i<=n;i++){
		for(int j=1;j<=k;j++){
			printf("*");
		}
		printf("\n");
		k+=3;
		for(int j=1;j<=i;j++){
            if(i==n){break;}
			for(int l=1;l<=i;l++){
			printf("*");
			}
			printf("\n");
		}
	
	
	}

	return 0;
}