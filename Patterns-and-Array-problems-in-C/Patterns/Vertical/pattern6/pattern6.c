#include "stdio.h"

int main(){

    int n= 3,k=2 ;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=k;j++){
            printf("*");
        
        }
        printf("\n");
        k+=k;
        for(int j=1;j<=2*i-1;j++){
            printf("*\n");
        }

        
    }


    return 0;
}