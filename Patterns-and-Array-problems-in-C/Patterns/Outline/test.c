#include "stdio.h"

int main(){

    int n =7;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n+i-1;j++){
            if(j==n-i+1 ||j==n+i-1 || i==n){
                printf("*");
            }else{
                printf(" ");
            }

        }

        printf("\n");
    }



    return 0;
}