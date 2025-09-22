#include "stdio.h"

int main(){

    int n = 5,k=1;
    for(int i=0; i<n;i++){
        k=0;
        for(int j=0;j<=i;j++){  
                printf("%d ",k);
                k=k+i;  
        }
        printf("\n");
    }

    return 0;
}