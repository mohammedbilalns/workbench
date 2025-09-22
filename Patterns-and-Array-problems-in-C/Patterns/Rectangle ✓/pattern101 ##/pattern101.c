#include "stdio.h"

int main(){

    int n =4,k;
    for(int i=1;i<=n;i++){
        k = 1;
        for(int j=1;j<=2*n;j++){
            if(j<=i || j>2*n-i){
                printf("%d",k);
                k += j<i ? 1 : j>n ? -1: 0;  
            
            }else{
                printf("*");
            }
        }
        printf("\n");
    }

    return 0;
}