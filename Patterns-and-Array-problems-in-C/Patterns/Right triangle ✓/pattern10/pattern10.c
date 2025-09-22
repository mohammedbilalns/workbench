#include <stdio.h> 

int main(){

	int n = 5;
	for(int i=n;i>=1;i--){
		int k=1;
		for(int j=1;j<=2*i-1;j++){
			printf("%d",k);
			k+= j<i? 1 :-1;
		
		}
	
		printf("\n");
	}

}