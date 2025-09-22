#include "stdio.h"

int main(){

    int n = 5;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i+2;j++){
            printf("%d",(i+j)%2);
        }

        printf("\n");
    }


    return 0;
}