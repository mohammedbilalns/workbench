#include <stdio.h> 

int main(){

	int n =6 ;
	for(int i=1;i<=n;i++){
		int k=i;
		for(int j=1;j<=i;j++){
			if(j%2==1){
				printf("%d",k);
				k+=i;
			}else{
				printf("*");
				k+=i;
			}
		}
	
	
		printf("\n");
	}


}
