#include <stdio.h> 

int main(){

	int n = 4;
	for(int i=1;i<=n;i++){
		int k=0;
		for(int j=1;j<=i+1;j++){
			printf("%d ",k);
			k+=i;
        }
		printf("\n");
	}


}