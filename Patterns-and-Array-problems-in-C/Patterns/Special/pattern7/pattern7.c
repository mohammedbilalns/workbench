#include "stdio.h"

int main(){

    int n=  5,k=0;

    for(int i=1;i<=2*n-1;i++){
        k+= i<=n ? 1 : -1;
        for(int j=1;j<=n;j++){
            if(j<=k){
                    printf("*");
            }else {
                printf(" ");
            }
        }
        for(int j=1;j<=k;j++){
                    printf("*");
        }
        printf("\n");
    }


    return 0;
}