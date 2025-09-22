#include "stdio.h"

int main(){

    int n = 5;
    for(int i=1;i<=n;i++){
        int k = 2*i-1;
        for(int j=1;j<=n-i+1;j++){
            printf("%d",k);
            k += 2;
        }
        printf("\n");
    }
}