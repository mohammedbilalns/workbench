#include "stdio.h"

int main(){

    int n = 5,k=n+1;
    for(int i=1;i<=2*n;i++){
                k += i<= n ? -1 : i > n ? 1 : 0;
        for(int j=1;j<=n+k;j++){
            if(j>=k+1 &&j<=n){
                printf("  ");
            }else {
                printf("* ");
            }
        }
        printf("\n");
    }

    return 0;
}

