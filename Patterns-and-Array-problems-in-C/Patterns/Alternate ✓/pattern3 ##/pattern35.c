#include "stdio.h"

int main(){

    int n = 5,k=1;

    for(int i=1;i<=n;i++){
        
        for(int j=1;j<=2*i-1;j++){
            if(j%2==1){
                printf("%d",k);
                k+= i%2==1 ?1 : -1;
            }
            else{
                printf("*");
            }
        }
        k+= i%2==1 ? i : i+1; 
        printf("\n");

    }



    return 0;
}