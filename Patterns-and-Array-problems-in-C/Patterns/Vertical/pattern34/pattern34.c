#include "stdio.h"

int main(){

    int n = 7;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=2*(n-i)+1;j++){
            
            printf("*");
        }
        printf("\n");
        for(int j=1;j<=i;j++){
            if(i==n){break;}
            printf("*");
        }
        printf("\n");

    }


    return 0;
}