#include "stdio.h"

int main(){

   int n = 5;
   for(int i=5;i>=1;i--){

    for(int j=1;j<=2*i;j++){
        printf("*");
    }
    printf("\n");
    for(int j=1;j<=n-i+1;j++){
        printf("*\n");
    }

   } 



    return 0;
}

