#include "stdio.h"

int main(){

    int n = 4;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=4*n-5;j++){

            if(j<=2*i-1 || j>=4*n-2*i-3 ){

                printf("*");
            }else {
            printf(" ");
            }
        }

        printf("\n");
    }

    return 0;
}

